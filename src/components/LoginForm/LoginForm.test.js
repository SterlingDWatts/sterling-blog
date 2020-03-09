import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import LoginForm from "./LoginForm";

describe("LoginForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<LoginForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
