import React, { Component } from "react";
import { NiceDate } from "../Utils/Utils";
import BlogBodyContext from "../../contexts/BlogPageContext";
import TokenService from "../../services/token-service";
import "./BlogBody.css";

class BlogBody extends Component {
  static contextType = BlogBodyContext;

  renderDelete = () => {
    return <button className="BlogBody__delete_button">Delete Blog</button>;
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
    let token;
    if (TokenService.hasAuthToken()) {
      token = TokenService.readJwtToken();
    }
    let deleteButton;
    if (token && token.id === author.id) {
      deleteButton = this.renderDelete();
    }
    console.log(typeof date_created);
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
            {date_created && <NiceDate date={date_created} />}
          </div>
          <div className="BlogBody__views">{number_of_views} views</div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="BlogBody__content"
        />
        <div className="BlogBody__buttons">{deleteButton}</div>
      </main>
    );
  }
}

export default BlogBody;
