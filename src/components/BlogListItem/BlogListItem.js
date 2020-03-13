import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NiceDate } from "../Utils/Utils";
import "./BlogListItem.css";

class BlogListItem extends Component {
  static defaultProps = {
    views: 0
  };
  render() {
    const length = Math.floor(this.props.content.length / 300);
    return (
      <li className="BlogListItem">
        <Link
          to={`/blogs/${this.props.id}`}
          className="BlogListItem__title_link"
        >
          <div className="BlogListItem__info">
            <h3 className="BlogListItem__title">{this.props.title}</h3>

            <div className="BlogListItem__date_and_length">
              <NiceDate date={this.props.date_created} />
              {" · " + length + " min read"}
            </div>
            <div className="BlogListItem__author">
              {this.props.author.first_name + " " + this.props.author.last_name}
            </div>
            <div className="BlogListItem__line"></div>
          </div>
          <div className="BlogListItem__pic_holder">
            <div
              className="BlogListItem__pic"
              style={{
                backgroundImage: "url('" + this.props.picture + "')"
              }}
            ></div>
          </div>
        </Link>
      </li>
    );
  }
}

BlogListItem.propTypes = {
  id: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  picture: PropTypes.string.isRequired,
  date_created: (props, propName, componentName) => {
    const prop = props[propName];

    if (!prop) {
      return new Error(`${propName} is required in ${componentName}`);
    }

    if (typeof prop != "object") {
      return new Error(
        `Invalid prop, ${propName} is expected to be an object in ${componentName}. ${typeof prop} found.`
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
