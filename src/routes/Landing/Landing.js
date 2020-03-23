import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Page } from "../../components/Utils/Utils";
import BlogList from "../../components/BlogList/BlogList";
import config from "../../config";
import "./Landing.css";

// import files for froala editor
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "font-awesome/css/font-awesome.css";
// Adds the align option
import "froala-editor/js/plugins/align.min.js";
// Limits the number of characters that can be inserted in the editor
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/css/plugins/char_counter.min.css";
// Add the possibility to change the background and text colors
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/css/plugins/colors.min.css";
// Allows the user to change the font size with pixel precision
import "froala-editor/js/plugins/font_size.min.js";
// Enables advanced link editing
import "froala-editor/js/plugins/link.min.js";
// Allows users to change the type of paragraph
import "froala-editor/js/plugins/paragraph_format.min.js";
// Adds quote option
import "froala-editor/js/plugins/quote.min.js";

class Landing extends Component {
  state = {
    styleModel:
      '<p style="text-align: center;"><span style="color: rgb(226, 80, 65);">&lt; -- ( Feel free to edit me! (just click to edit)) -- &gt;</span></p><p>Use the <strong>simple</strong> interface to style your blog and and see it exactly as your readers will. Edit font size, color, and style. This <u>powerful editor</u> will allow you to make your content look exactly the way that you want, giving you the perfect creative outlet.&nbsp;</p>'
  };

  handleStyleChange = styleModel => {
    this.setState({
      styleModel
    });
  };

  render() {
    return (
      <Page className="Landing">
        <header>
          <h1>
            <Link to="/blogs">
              Sterling | <span className="Landing--color-splash">Blog</span>
            </Link>
          </h1>
          <h2>Easily share your thoughts.</h2>
        </header>
        <section>
          <header>
            <h3>
              Display your thoughts for the{" "}
              <span className="Landing--color-splash">world</span> to see
            </h3>
          </header>
          <p>
            The Blogs page displays a list of all of your blogs for your readers
            to easily find your content. When you make a new blog post, it is
            automatically added to the list and linked to it's unique page.
            Focus more on the creative work of writing, not on maintaining a
            site!
          </p>
          <BlogList />
        </section>

        <section>
          <header>
            <h3>
              <span className="Landing--color-splash">Style</span> your blog.
            </h3>
          </header>
          <FroalaEditor
            tag="textarea"
            model={this.state.styleModel}
            onModelChange={this.handleStyleChange}
            config={{
              placeholderText: "Click to Edit Blog Content",
              charCounterCount: true,
              fontSizeSelection: false,
              fontSizeDefaultSelection: "16",
              attribution: false,
              key: config.FROALA_API_KEY,
              pluginsEnabled: [
                "align",
                "charCounter",
                "colors",
                "fontFamily",
                "fontsize",
                "inlineStyle",
                "inlineClass",
                "lineBreaker",
                "lineHeight",
                "link",
                "lists",
                "paragraphFormat",
                "paragraphStyle",
                "quote",
                "url"
              ]
            }}
          />
        </section>

        <section>
          <header>
            <h3>
              Edit on the go<span className="Landing--color-splash">!</span>
            </h3>
          </header>
          <p>
            Editing after you have published is effortless. Just open up your
            blog and tap the edit button. The content is loaded into the editor,
            making it so unbomplicated that you would feel confortable editing a
            simple error on your phone if you noticed it rather than waiting to
            get back to your computer.
          </p>

          <Link to="/blogs">Check it out now!</Link>
          <p>
            If you want to test it out without creating an account, just use the
            dumby credentials!
            <br />
            <br />
            Username: RealPerson
            <br />
            Password: abCD56&*
          </p>
        </section>
      </Page>
    );
  }
}

export default Landing;
