import React, { Component } from "react";
import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import { Page } from "../../components/Utils/Utils";
import "./CreateAccountPage.css";

class CreateAccountPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <Page className="CreateAccountPage">
        <CreateAccountForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Page>
    );
  }
}

export default CreateAccountPage;
