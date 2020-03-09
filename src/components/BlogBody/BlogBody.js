import React, { Component } from "react";
import "./BlogBody.css";

class BlogBody extends Component {
  render() {
    return (
      <main className="BlogBody">
        <header>
          <h2 className="BlogBody__title">{this.props.title}</h2>
        </header>
        <div
          className="BlogBody__pic"
          style={{ backgroundImage: "url('" + this.props.longPic + "')" }}
        ></div>
        <div className="BlogBody__date_and_author">
          <div className="BlogBody__date">{this.props.date}</div>
          <div className="BlogBody__author">{this.props.author}</div>
        </div>
        <div className="BlogBody__content">{this.props.content}</div>
      </main>
    );
  }
}

export default BlogBody;
