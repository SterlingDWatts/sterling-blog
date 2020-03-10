import React, { Component } from "react";
import BlogList from "../../components/BlogList/BlogList";
import BlogListContext from "../../contexts/BlogListContext";
import "./BlogsListPage.css";

class BlogsListPage extends Component {
  static contextType = BlogListContext;

  render() {
    return (
      <div className="BlogsListPage">
        <main>
          <BlogList blogs={this.context.blogList} />
        </main>
      </div>
    );
  }
}

export default BlogsListPage;
