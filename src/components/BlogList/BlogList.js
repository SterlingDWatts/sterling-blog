import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
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

  renderBlogItems = () => {
    let blogList;
    if (this.context.blogList && this.context.blogList.length > 0) {
      blogList = this.context.blogList.filter(
        blog => blog.id !== Number(this.props.blogId)
      );
      blogList = this.props.recent ? blogList.slice(0, 2) : blogList;
      return blogList.map(blog => <BlogListItem key={blog.id} {...blog} />);
    }
    return (
      <div className="BlogList--loading-splash">
        Loading Blogs<span className="BlogList--color-splash">...</span>
        <br />
        <br />
        <FontAwesomeIcon icon={faSpinner} pulse />
      </div>
    );
  };

  render() {
    const { error } = this.context;
    return (
      <ul className="BlogList">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderBlogItems()
        )}
      </ul>
    );
  }
}

export default BlogList;
