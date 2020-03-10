import React, { Component } from "react";
import PropTypes from "prop-types";
import BlogBody from "../../components/BlogBody/BlogBody";
import BlogList from "../../components/BlogList/BlogList";
import BlogListContext from "../../contexts/BlogListContext";
import "./BlogPage.css";

class BlogPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = BlogListContext;

  render() {
    const blog = this.context.blogList.find(
      b => b.id === this.props.match.params.blogId
    );
    const recentBlogs = this.context.blogList
      .filter(b => b.id !== this.props.match.params.blogId)
      .slice(0, 2);
    return (
      <div className="BlogPage">
        {blog && <BlogBody {...blog} />}
        <section className="BlogPage__blog_list">
          <h3>Recent Blogs</h3>
          {recentBlogs && <BlogList blogs={recentBlogs} />}
        </section>
      </div>
    );
  }
}

BlogPage.propTypes = {
  match: PropTypes.object
};

export default BlogPage;
