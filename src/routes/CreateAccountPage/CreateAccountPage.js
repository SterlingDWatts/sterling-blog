import React, { Component } from "react";
import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import { Page } from  "../../components/Utils/Utils"
import "./CreateAccountPage.css";

class CreateAccountPage extends Component {
  render() {
    return (
      <Page className="CreateAccountPage">
        <CreateAccountForm />
      </Page>
    );
  }
}

export default CreateAccountPage;
