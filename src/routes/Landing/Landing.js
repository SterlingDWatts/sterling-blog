import React, { Component } from "react";
import { Page } from "../../components/Utils/Utils"
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <Page className="Landing">
        <header>
          <h1>Sterling | Blog</h1>
          <h2>Easily share your thoughts</h2>
        </header>
        <section>
          <header>
            <h3>Intuitive Content Management</h3>
          </header>
          <p>
            [<em>placeholder for screenshot of Blog List</em>]
          </p>
          <p>
            Sterling | Dev | Blog is a tool for focusing on creating Blog
            content instead of managing a site. Readers will see a list of all
            available blogs and can read them as well as comment. Writers can
            easily create and edit their Blogs
          </p>
        </section>

        <section>
          <header>
            <h3>Style your blog</h3>
          </header>
          <p>
            [<em>placeholder for screenshot of editing interface</em>]
          </p>
          <p>
            Use the simple interface to style your blog and and see it exactly
            as your readers will. Edit font size, color, and style. Add pictures
            and edit them as well.
          </p>
        </section>

        <section>
          <header>
            <h3>Quick edits</h3>
          </header>
          <p>
            [<em>placeholder for screenshot of Edit Form</em>]
          </p>
          <p>
            Editing you blog is quick. The Editor displays your blog the way
            readers see it, hiding the html in the background.
          </p>
        </section>
      </Page>
    );
  }
}

export default Landing;
