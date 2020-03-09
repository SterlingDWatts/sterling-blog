import React, { Component } from "react";
import BlogListItem from "../../components/BlogListItem/BlogListItem";
import blogs from "../../blogs-store";
import "./BlogsListPage.css";

class BlogsListPage extends Component {
  render() {
    const blogItems = blogs.map(blog => (
      <BlogListItem key={blog.id} {...blog} />
    ));
    return (
      <main className="BlogsListPage">
        <ul className="BlogsListPage__ul">{blogItems}</ul>
      </main>
    );
  }
}

export default BlogsListPage;
