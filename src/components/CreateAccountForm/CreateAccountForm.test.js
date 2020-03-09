import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CreateAccountForm from "./CreateAccountForm";

describe("CreateAccountForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CreateAccountForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<CreateAccountForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
