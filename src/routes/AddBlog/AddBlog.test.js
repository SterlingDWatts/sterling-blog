import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddBlog from "./AddBlog";

describe("AddBlog Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddBlog />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
