import React, { Component } from "react";
import "./AddBlog.css";

class AddBlog extends Component {
  render() {
    return (
      <form className="AddBlog">
        <div className="AddBlog__title">
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="AddBlog__picture">
          <label htmlFor="picture">Url for Picture: </label>
          <input type="url" name="picture" id="picture" required />
        </div>
        <div className="AddBlog__content">
          <label htmlFor="content">Content: </label>
          <textarea name="content" id="content" required />
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
