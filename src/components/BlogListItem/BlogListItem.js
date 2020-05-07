import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NiceDate } from "../Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
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
            <div className="BlogListItem__date_and_author_box">
              <div className="BlogListItem__author">
                {this.props.author.first_name +
                  " " +
                  this.props.author.last_name}
              </div>
              <h4 className="BlogListItem__date">
                <span className="BlogListItem--color-splash">
                  <NiceDate date={this.props.date_created} format={"MMMM dd"} />
                </span>
                <NiceDate date={this.props.date_created} format={", yyyy"} />
              </h4>
            </div>
            <header>
              <h3 className="BlogListItem__title">{this.props.title}</h3>
            </header>
            <div className="BlogListItem__views">
              <FontAwesomeIcon icon={faEye} />{" "}
              <span className="BlogListItem--color-splash">
                {this.props.number_of_views}
              </span>
            </div>
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
