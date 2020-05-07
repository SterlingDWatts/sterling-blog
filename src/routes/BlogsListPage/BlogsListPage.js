import React, { Component } from "react";
import BlogList from "../../components/BlogList/BlogList";
import { Page } from "../../components/Utils/Utils";
import "./BlogsListPage.css";

class BlogsListPage extends Component {
  render() {
    return (
      <Page className="BlogsListPage">
        <h2>
          Sterling | <span className="BlogsListPage--color-splash">Blog</span>
        </h2>
        <main>
          <div className="BlogsListPage--small">
            <BlogList />
          </div>
          <div className="BlogsListPage--large">
            <BlogList featured={true} />
            <BlogList denseView={true} />
          </div>
        </main>
      </Page>
    );
  }
}

export default BlogsListPage;
