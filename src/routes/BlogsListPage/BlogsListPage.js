import React, { Component } from "react";
import BlogList from "../../components/BlogList/BlogList";
import { Page } from "../../components/Utils/Utils";
import "./BlogsListPage.css";

class BlogsListPage extends Component {
  render() {
    return (
      <Page className="BlogsListPage">
        <h2>Sterling | Blog</h2>
        <main>
          <BlogList />
        </main>
      </Page>
    );
  }
}

export default BlogsListPage;
