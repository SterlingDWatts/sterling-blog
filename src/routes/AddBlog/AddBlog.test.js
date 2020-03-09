import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import AddBlog from "./AddBlog";

describe("AddBlog Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddBlog />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<AddBlog />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
