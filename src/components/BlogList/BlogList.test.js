import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import BlogList from "./BlogList";

describe("BlogList Component", () => {
  const blogs = [
    {
      id: 1,
      title: "test title",
      content: "test content",
      author: { first_name: "test", last_name: "author"},
      picture: "https://picsum.photos/seed/three/900/510",
      views: 8,
      date_created: new Date("December 22, 2019")
    }
  ];
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <BlogList blogs={blogs} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <BlogList blogs={blogs} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders the UI as expected with no blogs", () => {
    const emptyList = [];
    const tree = renderer
      .create(
        <BrowserRouter>
          <BlogList blogs={emptyList} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
