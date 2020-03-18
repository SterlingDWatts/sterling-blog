import React, { Component } from "react";
import { Page } from "../../components/Utils/Utils";
import blogListScreen from "./blog-list-screen.png";
import blogPageScreen from "./blog-page-screen.png";
import editBlogScreen from "./edit-blog-screen.png";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <Page className="Landing">
        <header>
          <h1>Sterling | Blog</h1>
          <h2>Easily share your thoughts.</h2>
        </header>
        <section>
          <header>
            <h3>Display your thoughts easily for the world to see</h3>
          </header>
          <img
            className="Landing__blog_list_pic"
            src={blogListScreen}
            width="242px"
            alt="Blog List Page"
          />
          <p>
            The Blogs page displays a list of all of your blogs for your readers
            to easily find your content. When you make a new blog post, it is
            automatically added to the list and linked to it's unique page.
            Focus morer on the creative work of writing, not on maintaining a
            site!
          </p>
        </section>

        <section>
          <header>
            <h3>Style your blog.</h3>
          </header>
          <img
            className="Landing__blog_page_pic"
            src={blogPageScreen}
            width="242px"
            alt="Blog Page"
          />
          <p>
            Use the simple interface to style your blog and and see it exactly
            as your readers will. Edit font size, color, and style. This
            powerful editor will allow you to make your content look exactly the
            way that you want, giving you the perfect creative outlet.
          </p>
        </section>

        <section>
          <header>
            <h3>Edit on the go!</h3>
          </header>
          <img
            className="Landing__edit_blog_pic"
            src={editBlogScreen}
            width="242px"
            alt="Blog Edit Page"
          />
          <p>
            Editing after you have published is effortless. Just open up your
            blog and tap the edit button. The content is loaded into the editor,
            making it so unbomplicated that you would feel confortable editing a
            simple error on your phone if you noticed it rather than waiting to
            get back to your computer.
          </p>
        </section>
      </Page>
    );
  }
}

export default Landing;
