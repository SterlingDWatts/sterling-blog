import React, { Component } from "react";
import BlogList from "../../components/BlogList/BlogList";
import BlogListContext from "../../contexts/BlogListContext";
import { Page} from "../../components/Utils/Utils"
import "./BlogsListPage.css";

class BlogsListPage extends Component {
  static contextType = BlogListContext;

  render() {
    return (
      <Page className="BlogsListPage">
        <h2>Sterling | Blog</h2>
        <main>
          <BlogList blogs={this.context.blogList} />
        </main>
      </Page>
    );
  }
}

export default BlogsListPage;
