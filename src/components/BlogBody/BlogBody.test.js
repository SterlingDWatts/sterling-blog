import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import BlogBody from "./BlogBody";

describe("BlogBody Component", () => {
  const blogs = [
    {
      id: 1,
      title: "test title",
      content: "test content",
      author: "test author",
      longPic: "https://picsum.photos/seed/three/900/510",
      squarePic: "https://picsum.photos/seed/three/255/255",
      views: 8,
      date: "December 22, 2019"
    }
  ];
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <BlogBody {...blogs[0]} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <BlogBody {...blogs[0]} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
