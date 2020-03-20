import React, { Component } from "react";
import config from "../../config";

// import files for froala editor
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "font-awesome/css/font-awesome.css";
// Adds the align option
import "froala-editor/js/plugins/align.min.js";
// Limits the number of characters that can be inserted in the editor
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/css/plugins/char_counter.min.css";
// Add the possibility to change the background and text colors
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/css/plugins/colors.min.css";
// Allows the user to change the font size with pixel precision
import "froala-editor/js/plugins/font_size.min.js";
// Enables advanced link editing
import "froala-editor/js/plugins/link.min.js";
// Allows users to change the type of paragraph
import "froala-editor/js/plugins/paragraph_format.min.js";
// Adds quote option
import "froala-editor/js/plugins/quote.min.js";

import {
  ValidationError,
  Required,
  Button,
  Page
} from "../../components/Utils/Utils";
import BlogPageContext from "../../contexts/BlogPageContext";
import "./EditBlog.css";
import BlogApiService from "../../services/blog-api-service";

class EditBlog extends Component {
  static contextType = BlogPageContext;

  state = {
    title: {
      value: "",
      touched: false
    },
    picture: {
      src: "https://live.staticflickr.com/65535/49645116543_0c7e1e3f1e_c.jpg",
      touched: false
    },
    content: {
      value: "",
      touched: false
    }
  };

  componentDidMount() {
    const blogId = this.props.match.params.blogId;
    this.context.clearError();
    BlogApiService.getBlog(blogId)
      .then(this.context.setBlog)
      .then(() => {
        const { title, content, picture } = this.context.blog;
        this.setState({
          title: { value: title, touched: true },
          picture: { src: picture, touched: true },
          content: { value: content, touched: true }
        });
      })
      .catch(this.context.setError);
  }

  handleTitleChange = title => {
    this.setState({
      title: { value: title, touched: true }
    });
  };

  handlePictureChange = picture => {
    this.setState({
      picture: { src: picture, touched: true }
    });
  };

  handleContentChange = content => {
    this.setState({
      content: { value: content, touched: true }
    });
  };

  validateTitle() {
    const title = this.state.title.value.trim();
    const wordsArray = title.split(" ");
    if (title.length === 0) {
      return "Title is required.";
    } else if (title.length < 7 || title.length > 80) {
      return "Title must be between 7 and 80 characters.";
    } else if (wordsArray.length < 3) {
      return "Title must have at least three words.";
    }
  }

  validatePicture() {
    if (!this.state.picture.touched) {
      return "Please change picture";
    } else if (this.state.picture.src.length === 0 || !this.state.picture.src) {
      return "Picture is required";
    }
  }

  validateContent() {
    const content = this.state.content.value;
    const wordArray = content.split(" ");
    if (content.length === 0) {
      return "Content is required";
    } else if (wordArray.length < 10) {
      return "Content must be at least 10 words";
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, picture, content } = this.state;
    const blog = {
      title: title.value,
      picture: picture.src,
      content: content.value
    };
    BlogApiService.patchBlog(this.props.match.params.blogId, blog)
      .then(res => {
        this.setState({
          title: { value: "", touched: false },
          picture: { src: {}, touched: false },
          content: { value: "", touched: false }
        });
        this.props.history.push(`/blogs/${this.props.match.params.blogId}`);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  handleCancelClick = () => {
    this.props.history.push("/blogs");
  };

  render() {
    const titleError = this.validateTitle();
    const pictureError = this.validatePicture();
    const contentError = this.validateContent();
    return (
      <Page>
        <form className="EditBlog" onSubmit={e => this.handleSubmit(e)}>
          <h2>Edit Blog</h2>
          <div className="hint">
            <Required /> required fields
          </div>
          <div className="EditBlog__title">
            <label htmlFor="title">
              Title
              {"  "}
              <Required />
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              value={this.state.title.value}
              onChange={e => this.handleTitleChange(e.target.value)}
              placeholder="Edit title"
            />
            <ValidationError
              message={titleError}
              touched={this.state.title.touched}
            />
          </div>
          <div className="EditBlog__picture">
            <label htmlFor="picture">
              Picture
              {"  "}
              <Required />
            </label>
            <input
              type="url"
              name="picture"
              id="picture"
              required
              value={this.state.picture.src}
              onChange={e => this.handlePictureChange(e.target.value)}
              placeholder="Edit url of main picture"
            />
            <ValidationError message={pictureError} />
            <div
              className="EditBlog__pic"
              style={{
                backgroundImage: "url('" + this.state.picture.src + "')"
              }}
            ></div>
          </div>
          <div className="EditBlog__content">
            <label>
              Content
              {"  "}
              <Required />
            </label>
            <FroalaEditor
              tag="textarea"
              id="content"
              model={this.state.content.value}
              onModelChange={this.handleContentChange}
              config={{
                initOnClick: true,
                placeholderText: "Click to Edit Blog Content",
                charCounterCount: true,
                fontSizeSelection: false,
                fontSizeDefaultSelection: "16",
                attribution: false,
                key: config.FROALA_API_KEY
              }}
            />
            <ValidationError
              message={contentError}
              touched={this.state.content.touched}
            />
          </div>
          <div className="EditBlog__buttons">
            <Button
              className="form__button"
              type="submit"
              disabled={
                this.validateTitle() ||
                this.validatePicture() ||
                this.validateContent()
              }
            >
              Submit
            </Button>
            <Button className="form__button" onClick={this.handleCancelClick}>
              Cancel
            </Button>
          </div>
        </form>
      </Page>
    );
  }
}

export default EditBlog;
