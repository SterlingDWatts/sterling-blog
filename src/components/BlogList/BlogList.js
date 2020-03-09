import React, { Component } from "react";
import BlogListItem from "../BlogListItem/BlogListItem";
import "./BlogList.css";

class BlogList extends Component {
  render() {
    const blogListItems = this.props.blogs.map(blog => (
      <BlogListItem key={blog.id} {...blog} />
    ));
    return <ul className="BlogList">{blogListItems}</ul>;
  }
}

export default BlogList;
