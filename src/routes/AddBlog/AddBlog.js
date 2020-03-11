import React, { Component } from "react";
import cuid from "cuid";

// import files for froala editor
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorImg from "react-froala-wysiwyg/FroalaEditorImg";
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
// Enables advanced image editing
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/css/plugins/image.min.css";
// Enables advanced link editing
import "froala-editor/js/plugins/link.min.js";
// Allows users to change the type of paragraph
import "froala-editor/js/plugins/paragraph_format.min.js";
// Adds quote option
import "froala-editor/js/plugins/quote.min.js";

import {
  ValidationError,
  Required,
  Label,
  Button,
  LabelGroup
} from "../../components/Utils/Utils";
import BlogListContext from "../../contexts/BlogListContext";
import "./AddBlog.css";

class AddBlog extends Component {
  static contextType = BlogListContext;

  state = {
    title: {
      value: "",
      touched: false
    },
    picture: {
      model: {
        src: "https://live.staticflickr.com/65535/49645116543_0c7e1e3f1e_c.jpg"
      },
      touched: false
    },
    content: {
      value: "",
      touched: false
    }
  };

  handleTitleChange = title => {
    this.setState({
      title: { value: title, touched: true }
    });
  };

  handlePictureChange = picture => {
    this.setState({
      picture: { model: picture, touched: true }
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
    } else if (
      this.state.picture.model.src.length === 0 ||
      !this.state.picture.model.src
    ) {
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
      id: cuid(),
      title: title.value,
      squarePic: picture.model.src,
      longPic: picture.model.src,
      content: content.value,
      author: "Sterling Watts",
      date: new Date(),
      views: 0
    };
    this.setState({
      title: { value: "", touched: false },
      picture: { model: {}, touched: false },
      content: { value: "", touched: false }
    });
    this.context.addBlog(blog);
    this.props.history.push("/blogs");
  };

  render() {
    const titleError = this.validateTitle();
    const pictureError = this.validatePicture();
    const contentError = this.validateContent();
    return (
      <form className="AddBlog" onSubmit={e => this.handleSubmit(e)}>
        <h2>Create Blog</h2>
        <div className="hint">
          <Required /> required fields
        </div>
        <LabelGroup className="AddBlog__title">
          <Label htmlFor="title">
            Title
            {"  "}
            <Required />
          </Label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={this.state.title.value}
            onChange={e => this.handleTitleChange(e.target.value)}
            placeholder="Edit title"
          />
          {this.state.title.touched && <ValidationError message={titleError} />}
        </LabelGroup>
        <LabelGroup className="AddBlog__picture">
          <Label htmlFor="picture">
            Picture
            {"  "}
            <Required />
          </Label>
          <FroalaEditorImg
            model={this.state.picture.model}
            onModelChange={this.handlePictureChange}
            config={{
              imageEditButtons: ["imageReplace"]
            }}
          />
          <ValidationError message={pictureError} />
        </LabelGroup>
        <LabelGroup className="AddBlog__content">
          <Label>
            Content
            {"  "}
            <Required />
          </Label>
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
              attribution: false
            }}
          />
          {this.state.content.touched && (
            <ValidationError message={contentError} />
          )}
        </LabelGroup>
        <div className="AddBlog__buttons">
          <Button
            type="submit"
            disabled={this.validateTitle() || this.validatePicture()}
          >
            Submit
          </Button>
          <Button>Cancel</Button>
        </div>
      </form>
    );
  }
}

export default AddBlog;
