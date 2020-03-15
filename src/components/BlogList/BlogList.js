import React, { Component } from "react";
import BlogListItem from "../BlogListItem/BlogListItem";
import BlogListContext from "../../contexts/BlogListContext";
import "./BlogList.css";
import BlogApiService from "../../services/blog-api-service";

class BlogList extends Component {
  static contextType = BlogListContext;

  static defaultProps = {
    recent: false,
    blogId: -1
  };

  componentDidMount() {
    this.context.clearError();
    BlogApiService.getBlogs()
      .then(this.context.setBlogList)
      .catch(this.context.setError);
  }

  renderBlogItems = blogs => {
    let blogList = blogs.filter(blog => blog.id !== Number(this.props.blogId));
    blogList = this.props.recent ? blogList.slice(0, 2) : blogList;
    return blogList.map(blog => {
      return <BlogListItem key={blog.id} {...blog} />;
    });
  };

  render() {
    const blogs = this.context.blogList;
    return <ul className="BlogList">{blogs && this.renderBlogItems(blogs)}</ul>;
  }
}

export default BlogList;
