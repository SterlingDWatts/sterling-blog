import React, { Component } from "react";
import PropTypes from "prop-types";
import BlogBody from "../../components/BlogBody/BlogBody";
import BlogList from "../../components/BlogList/BlogList";
import blogs from "../../blogs-store";
import "./BlogPage.css";

class BlogPage extends Component {
  render() {
    const blog = blogs.filter(
      b => b.id === Number(this.props.match.params.blogId)
    );
    return (
      <div className="BlogPage">
        <BlogBody {...blog[0]} />
        <section className="BlogPage__blog_list">
          <h3>Recent Blogs</h3>
          <BlogList blogs={blogs.slice(0, 2)} />
        </section>
      </div>
    );
  }
}

BlogPage.propTypes = {
  match: PropTypes.object
};

export default BlogPage;
