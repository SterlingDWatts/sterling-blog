import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./BlogListItem.css";

class BlogListItem extends Component {
  render() {
    const length = Math.floor(this.props.content.length / 300);
    return (
      <li className="BlogListItem">
        <div className="BlogListItem__info">
          <Link
            to={`/blog/${this.props.id}`}
            className="BlogListItem__title_link"
          >
            <h3 className="BlogListItem__title">{this.props.title}</h3>
          </Link>
          <div className="BlogListItem__date_and_length">
            {this.props.date + " · " + length + " min read"}
          </div>
          <div className="BlogListItem__author">{this.props.author}</div>
          <div className="BlogListItem__line"></div>
        </div>
        <div className="BlogListItem__pic_holder">
          <Link to={`/blog/${this.props.id}`}>
            <div
              className="BlogListItem__pic"
              style={{
                backgroundImage: "url('" + this.props.squarePic + "')"
              }}
            ></div>
          </Link>
        </div>
      </li>
    );
  }
}

BlogListItem.propTypes = {
  id: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  squarePic: PropTypes.string.isRequired,
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

export default BlogListItem;
