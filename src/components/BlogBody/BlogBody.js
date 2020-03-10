import React, { Component } from "react";
import PropTypes from "prop-types";
import { NiceDate, BlogContent } from "../Utils/Utils";
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
          <div className="BlogBody__date">
            <NiceDate date={this.props.date} />
          </div>
          <div className="BlogBody__author">{this.props.author}</div>
        </div>
        <BlogContent
          className="BlogBody__content"
          content={this.props.content}
        />
      </main>
    );
  }
}

BlogBody.propTypes = {
  id: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  squarePic: PropTypes.string.isRequired,
  longPic: PropTypes.string.isRequired,
  date: (props, propName, componentName) => {
    const prop = props[propName];

    if (!prop) {
      return new Error(`${propName} is required in ${componentName}`);
    }

    if (typeof prop != "string") {
      return new Error(
        `Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`
      );
    }

    if (!new Date(prop).getTime()) {
      return new Error(
        `Invalid prop, ${propName} is expected to be a date in ${componentName}`
      );
    }
  }
};

export default BlogBody;
