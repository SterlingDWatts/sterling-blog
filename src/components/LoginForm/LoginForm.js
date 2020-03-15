import React, { Component } from "react";
import {
  Input,
  Button,
  Required,
  ValidationError,
  Label,
  LabelGroup
} from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import "./LoginForm.css";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = {
    error: null,
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
    const USERNAME_REGEX = /([A-Za-z0-9.\-_]+)/;
    if (username.length === 0) {
      return "Username is required";
    } else if (username.length < 6 || username.length > 32) {
      return "Username must be between 6 and 32 characters";
    } else if (username.startsWith(" ") || username.endsWith(" ")) {
      return "Username cannot start or end with an empty space";
    } else if (!USERNAME_REGEX.test(username)) {
      return "Username must only include letters, numbers, ., -, and _";
    }
  };

  validatePassword = () => {
    const password = this.state.password.value;
    const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;
    if (password.length === 0) {
      return "Password is required";
    } else if (!PASSWORD_REGEX.test(password)) {
      return "Password must include at least upper case, lower case, number, and special character";
    } else if (password.startsWith(" ") || password.endsWith(" ")) {
      return "Password must not start or end with an empty space";
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target;
    this.setState({
      error: null
    });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        this.setState({
          username: { touched: false, value: "" },
          password: { touched: false, value: "" }
        });
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const usernameError = this.validateUsername();
    const passwordError = this.validatePassword();
    return (
      <form className="LoginForm" onSubmit={event => this.handleSubmit(event)}>
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
          <ValidationError
            message={usernameError}
            touched={this.state.username.touched}
          />
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
          <ValidationError
            message={passwordError}
            touched={this.state.password.touched}
          />
        </LabelGroup>
        <div className="LoginForm__buttons">
          <Button
            type="submit"
            disabled={usernameError || passwordError}
            className="form__button"
          >
            Login
          </Button>
        </div>
        <div className="LoginForm__other_links">
          Don't have an account yet?{" "}
          <Link to="/create-account">Create account</Link>
        </div>
      </form>
    );
  }
}

export default LoginForm;
