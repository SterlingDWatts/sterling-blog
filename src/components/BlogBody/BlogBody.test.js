import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import BlogBody from "./BlogBody";

describe("BlogBody Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlogBody />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<BlogBody />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
