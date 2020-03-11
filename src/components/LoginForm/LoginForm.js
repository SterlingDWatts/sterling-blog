import React, { Component } from "react";
import {
  Input,
  Button,
  Required,
  ValidationError,
  Label,
  LabelGroup
} from "../Utils/Utils";
import "./LoginForm.css";

class LoginForm extends Component {
  state = {
    username: {
      value: "",
      touched: false
    },
    password: {
      value: "",
      touched: false
    }
  };

  handleUsernameChange = username => {
    this.setState({
      username: {
        value: username,
        touched: true
      }
    });
  };

  handlePasswordChange = password => {
    this.setState({
      password: {
        value: password,
        touched: true
      }
    });
  };

  validateUsername = () => {
    const username = this.state.username.value;
    if (username.length === 0) {
      return "Username is required";
    }
  };

  validatePassword = () => {
    const password = this.state.password.value;
    if (password.length === 0) {
      return "Password is required";
    }
  };

  render() {
    const usernameError = this.validateUsername();
    const passwordError = this.validatePassword();
    return (
      <form className="LoginForm">
        <h2>Login</h2>
        <div className="hint">
          <Required /> required fields
        </div>
        <LabelGroup className="LoginForm__username">
          <Label htmlFor="username">
            Username <Required />
          </Label>
          <Input
            name="username"
            id="username"
            type="text"
            required
            value={this.state.username.value}
            onChange={e => this.handleUsernameChange(e.target.value)}
          />
          <ValidationError message={usernameError} />
        </LabelGroup>
        <LabelGroup className="LoginForm__password">
          <Label htmlFor="password">
            Password <Required />
          </Label>
          <Input
            name="password"
            id="password"
            required
            type="password"
            value={this.state.password.value}
            onChange={e => this.handlePasswordChange(e.target.value)}
          />
          <ValidationError message={passwordError} />
        </LabelGroup>
        <div className="LoginForm__buttons">
          <Button type="submit" disabled={usernameError || passwordError}>
            Login
          </Button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
