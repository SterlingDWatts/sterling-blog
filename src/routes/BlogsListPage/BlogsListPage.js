import React, { Component } from "react";
import BlogList from "../../components/BlogList/BlogList";
import blogs from "../../blogs-store";
import "./BlogsListPage.css";

class BlogsListPage extends Component {
  render() {
    return (
      <div className="BlogsListPage">
        <main>
          <BlogList blogs={blogs} />
        </main>
      </div>
    );
  }
}

export default BlogsListPage;
