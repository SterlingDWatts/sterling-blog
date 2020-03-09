import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import BlogBody from "./BlogBody";

describe("BlogBody Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <BlogBody />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <BlogBody />
        </BrowserRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
