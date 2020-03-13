import React, { Component } from "react";
import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import "./CreateAccountPage.css";

class CreateAccountPage extends Component {
  render() {
    return (
      <main className="CreateAccountPage">
        <CreateAccountForm />
      </main>
    );
  }
}

export default CreateAccountPage;
