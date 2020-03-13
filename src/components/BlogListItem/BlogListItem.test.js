import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import BlogListItem from "./BlogListItem";

describe("BlogListItem Component", () => {
  const blog = {
    id: 1,
    title: "test title",
    content: "test content",
    author: { firs_name: "test", last_name: "author" },
    picture: "https://picsum.photos/seed/three/900/510",
    views: 8,
    date: new Date("December 22, 2019")
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <BlogListItem {...blog} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <BlogListItem {...blog} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
