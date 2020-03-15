import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Page } from "../../components/Utils/Utils";
import "./LoginPage.css";

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/blogs";
    history.push(destination);
  };

  render() {
    return (
      <Page className="LoginPage">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Page>
    );
  }
}

export default LoginPage;
