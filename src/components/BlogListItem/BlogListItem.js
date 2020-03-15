import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NiceDate } from "../Utils/Utils";
import "./BlogListItem.css";

class BlogListItem extends Component {
  static defaultProps = {
    number_of_views: 0
  };
  render() {
    return (
      <li className="BlogListItem">
        <Link
          to={`/blogs/${this.props.id}`}
          className="BlogListItem__title_link"
        >
          <div className="BlogListItem__info">
            <h3 className="BlogListItem__title">{this.props.title}</h3>

            <div className="BlogListItem__date_and_views">
              <NiceDate date={this.props.date_created} />
              {" · views: " + this.props.number_of_views}
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
  number_of_views: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  picture: PropTypes.string.isRequired,
  date_created: (props, propName, componentName) => {
    const prop = props[propName];

    if (!prop) {
      return new Error(`${propName} is required in ${componentName}`);
    }

    if (!new Date(prop).getTime()) {
      return new Error(
        `Invalid prop, ${propName} is expected to be a date in ${componentName}`
      );
    }
  }
};

export default BlogListItem;
