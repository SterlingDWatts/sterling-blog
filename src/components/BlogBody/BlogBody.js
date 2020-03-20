import React, { Component } from "react";
import { NiceDate } from "../Utils/Utils";
import BlogBodyContext from "../../contexts/BlogPageContext";
import TokenService from "../../services/token-service";
import "./BlogBody.css";

class BlogBody extends Component {
  static contextType = BlogBodyContext;

  static defaultProps = {
    onDelete: () => {},
    onEdit: () => {}
  };

  renderButtons = () => {
    return (
      <>
        <button className="BlogBody__delete_button" onClick={this.props.onEdit}>
          Edit Blog
        </button>
        <button
          className="BlogBody__delete_button"
          onClick={this.props.onDelete}
        >
          Delete Blog
        </button>
      </>
    );
  };

  render() {
    const {
      title,
      picture,
      content,
      author,
      date_created,
      number_of_views
    } = this.context.blog;
    return (
      <main className="BlogBody">
        <header>
          <h2 className="BlogBody__title">{title}</h2>
          <h3 className="BlogBody__author">
            {author.first_name + " " + author.last_name}
          </h3>
        </header>
        <div
          className="BlogBody__pic"
          style={{ backgroundImage: "url('" + picture + "')" }}
        ></div>
        <div className="BlogBody__date_and_views">
          <div className="BlogBody__date">
            {date_created && (
              <>
                <span className="BlogBody--color-splash">
                  <NiceDate date={date_created} format={"MMMM dd"} />
                </span>
                <NiceDate date={date_created} format={", yyyy"} />
              </>
            )}
          </div>
          <div className="BlogBody__views">
            <span className="BlogBody--color-splash">{number_of_views}</span>{" "}
            views
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="BlogBody__content"
        />
        <div className="BlogBody__buttons">
          {TokenService.hasAuthToken() &&
            TokenService.hasPrivileges(author.id) &&
            this.renderButtons()}
        </div>
      </main>
    );
  }
}

export default BlogBody;
