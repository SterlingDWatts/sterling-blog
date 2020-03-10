import React, { Component } from "react";
import cuid from "cuid";

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
// Enables advanced image editing
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/css/plugins/image.min.css";
// Enables advanced link editing
import "froala-editor/js/plugins/link.min.js";
// Allows users to change the type of paragraph
import "froala-editor/js/plugins/paragraph_format.min.js";
// Adds quote option
import "froala-editor/js/plugins/quote.min.js";

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
      value: "",
      touched: false
    },
    model: {
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
      picture: { value: picture, touched: true }
    });
  };

  handleModelChange = model => {
    this.setState({
      model: { value: model, touched: true }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, picture, model } = this.state;
    const blog = {
      id: cuid(),
      title: title.value,
      squarePic: picture.value,
      longPic: picture.value,
      content: model.value,
      author: "Sterling Watts",
      date: new Date(),
      views: 0
    };
    this.setState({
      title: { value: "", touched: false },
      picture: { value: "", touched: false },
      model: { value: "", touched: false }
    });
    this.context.addBlog(blog);
  };

  render() {
    return (
      <form className="AddBlog" onSubmit={e => this.handleSubmit(e)}>
        <div className="AddBlog__title">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={this.state.title.value}
            onChange={e => this.handleTitleChange(e.target.value)}
          />
        </div>
        <div className="AddBlog__picture">
          <label htmlFor="picture">Url for Picture: </label>
          <input
            type="url"
            name="picture"
            id="picture"
            required
            value={this.state.picture.value}
            onChange={e => this.handlePictureChange(e.target.value)}
          />
        </div>
        <div className="AddBlog__content">
          <FroalaEditor
            name="content"
            id="content"
            tag="textarea"
            model={this.state.model.value}
            onModelChange={this.handleModelChange}
            config={{
              initOnClick: true,
              placeholderText: "Edit Blog Content",
              charCounterCount: true,
              fontSizeSelection: true,
              fontSizeDefaultSelection: "16",
              attribution: false
            }}
          />
        </div>
        <div className="AddBlog__buttons">
          <button type="submit">Submit</button>
          <button>Cancel</button>
        </div>
      </form>
    );
  }
}

export default AddBlog;
