import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
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
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <main className="LoginPage">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </main>
    );
  }
}

export default LoginPage;
