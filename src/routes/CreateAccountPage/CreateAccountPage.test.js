import React from "react";
import ReactDOM from "react-dom";
import CreateAccountPage from "./CreateAccountPage";

describe("CreateAccountPage Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CreateAccountPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
