import React, { Component } from "react";
import {
  Input,
  Button,
  Label,
  LabelGroup,
  ValidationError,
  Required
} from "../Utils/Utils";
import "./CreateAccountForm.css";

class CreateAccountForm extends Component {
  state = {
    firstName: {
      value: "",
      touched: false
    },
    lastName: {
      value: "",
      touched: false
    },
    username: {
      value: "",
      touched: false
    },
    email: {
      value: "",
      touched: false
    },
    confirmEmail: {
      value: "",
      touched: false
    },
    password: {
      value: "",
      touched: false
    },
    confirmPassword: {
      value: "",
      touched: false
    }
  };

  handleFirstNameChange = firstName => {
    this.setState({
      firstName: { value: firstName, touched: true }
    });
  };

  validateFirstName = () => {
    const firstName = this.state.firstName.value;
    const NAME_REGEX = /[A-z-]+/;
    if (firstName.length === 0) {
      return "First Name is required";
    } else if (firstName.startsWith(" ") || firstName.endsWith(" ")) {
      return "First Name cannot start or end with an empty space";
    } else if (!NAME_REGEX.test(firstName)) {
      return "First Name must only include letters and -";
    }
  };

  handleLastNameChange = lastName => {
    this.setState({
      lastName: { value: lastName, touched: true }
    });
  };

  validateLastName = () => {
    const lastName = this.state.lastName.value;
    const NAME_REGEX = /[A-z-]+/;
    if (lastName.length === 0) {
      return "Last Name is required";
    } else if (lastName.startsWith(" ") || lastName.endsWith(" ")) {
      return "Last Name cannot start or end with an empty space";
    } else if (!NAME_REGEX.test(lastName)) {
      return "Last Name must only include letters and -";
    }
  };

  handleUsernameChange = username => {
    this.setState({
      username: { value: username, touched: true }
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

  handleEmailChange = email => {
    this.setState({
      email: { value: email, touched: true }
    });
  };

  validateEmail = () => {
    const email = this.state.email.value;
    const EMAIL_REGEX = /([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/;
    if (email.length === 0) {
      return "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      return "Email must be valid";
    }
  };

  handleConfirmEmailChange = confirmEmail => {
    this.setState({
      confirmEmail: { value: confirmEmail, touched: true }
    });
  };

  validateConfirmEmail = () => {
    const confirmEmail = this.state.confirmEmail.value;
    if (confirmEmail.length === 0) {
      return "Please confirm Email";
    } else if (confirmEmail !== this.state.email.value) {
      return "Emails must match";
    }
  };

  handlePasswordChange = password => {
    this.setState({
      password: { value: password, touched: true }
    });
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

  handleConfirmPasswordChange = confirmPassword => {
    this.setState({
      confirmPassword: { value: confirmPassword, touched: true }
    });
  };

  validateConfirmPassword = () => {
    const confirmPassword = this.state.confirmPassword.value;
    if (confirmPassword.length === 0) {
      return "Please Validate Password";
    } else if (confirmPassword !== this.state.password.value) {
      return "Passwords must match";
    }
  };

  render() {
    const firstNameError = this.validateFirstName();
    const lastNameError = this.validateLastName();
    const usernameError = this.validateUsername();
    const emailError = this.validateEmail();
    const confirmEmailError = this.validateConfirmEmail();
    const passwordError = this.validatePassword();
    const confirmPasswordError = this.validateConfirmPassword();
    return (
      <form className="CreateAccountForm">
        <h2>Create Account</h2>
        <div className="hint">
          <Required /> required fields
        </div>
        <LabelGroup className="CreateAccountForm__first_name">
          <Label htmlFor="first_name">
            First Name <Required />
          </Label>
          <Input
            name="first_name"
            id="first_name"
            required
            type="text"
            value={this.state.firstName.value}
            onChange={e => this.handleFirstNameChange(e.target.value)}
          />
          <ValidationError
            message={firstNameError}
            touched={this.state.firstName.touched}
          />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__last_name">
          <Label htmlFor="last_name">
            Last Name <Required />
          </Label>
          <Input
            name="last_name"
            id="last_name"
            required
            type="text"
            value={this.state.lastName.value}
            onChange={e => this.handleLastNameChange(e.target.value)}
          />
          <ValidationError
            message={lastNameError}
            touched={this.state.lastName.touched}
          />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__username">
          <Label htmlFor="username">
            Username <Required />
          </Label>
          <Input
            name="username"
            id="username"
            required
            type="text"
            value={this.state.username.value}
            onChange={e => this.handleUsernameChange(e.target.value)}
          />
          <ValidationError
            message={usernameError}
            touched={this.state.username.touched}
          />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__email">
          <Label htmlFor="email">
            Email <Required />
          </Label>
          <Input
            name="email"
            id="email"
            required
            type="email"
            value={this.state.email.value}
            onChange={e => this.handleEmailChange(e.target.value)}
          />
          <ValidationError
            message={emailError}
            touched={this.state.email.touched}
          />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__confirm_email">
          <Label htmlFor="confirm_email">
            Confirm Email <Required />
          </Label>
          <Input
            name="confirm_email"
            id="confirm_email"
            required
            type="email"
            value={this.state.confirmEmail.value}
            onChange={e => this.handleConfirmEmailChange(e.target.value)}
          />
          <ValidationError
            message={confirmEmailError}
            touched={this.state.confirmEmail.touched}
          />
        </LabelGroup>
        <LabelGroup className="CreateAccountForm__password">
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
        <LabelGroup className="CreateAccountForm__confirm_password">
          <Label htmlFor="confirm_password">
            Confirm Password <Required />
          </Label>
          <Input
            name="confirm_password"
            id="confirm_password"
            required
            type="password"
            value={this.state.confirmPassword.value}
            onChange={e => this.handleConfirmPasswordChange(e.target.value)}
          />
          <ValidationError
            message={confirmPasswordError}
            touched={this.state.confirmPassword.touched}
          />
        </LabelGroup>
        <div className="CreateAccountForm__buttons">
          <Button
            type="submit"
            disabled={
              this.validateFirstName() ||
              this.validateLastName() ||
              this.validateUsername() ||
              this.validateEmail() ||
              this.validateConfirmEmail() ||
              this.validatePassword() ||
              this.validateConfirmPassword()
            }
          >
            Create Account
          </Button>
        </div>
      </form>
    );
  }
}

export default CreateAccountForm;
