import React, { Component } from "react";
import { Input, Button } from "../Utils/Utils";
import "./CreateAccountForm.css";

class CreateAccountForm extends Component {
  render() {
    return (
      <form className="CreateAccountForm">
        <div className="CreateAccountForm__first_name">
          <label htmlFor="first_name">First Name: </label>
          <Input name="first_name" id="first_name" required type="text" />
        </div>
        <div className="CreateAccountForm__last_name">
          <label htmlFor="last_name">Last Name: </label>
          <Input name="last_name" id="last_name" required type="text" />
        </div>
        <div className="CreateAccountForm__username">
          <label htmlFor="username">Username: </label>
          <Input name="username" id="username" required type="text" />
        </div>
        <div className="CreateAccountForm__email">
          <label htmlFor="email">Email: </label>
          <Input name="email" id="email" required type="email" />
        </div>
        <div className="CreateAccountForm__confirm_email">
          <label htmlFor="confirm_email">Confirm Email: </label>
          <Input
            name="confirm_email"
            id="confirm_email"
            required
            type="email"
          />
        </div>
        <div className="CreateAccountForm__password">
          <label htmlFor="password">Password: </label>
          <Input name="password" id="password" required type="password" />
        </div>
        <div className="CreateAccountForm__confirm_password">
          <label htmlFor="confirm_password">Confirm Password: </label>
          <Input
            name="confirm_password"
            id="confirm_password"
            required
            type="password"
          />
        </div>
        <div className="CreateAccountForm__buttons">
          <Button type="submit">Create Account</Button>
          <Button type="button">Login</Button>
        </div>
      </form>
    );
  }
}

export default CreateAccountForm;
