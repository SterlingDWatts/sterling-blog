import React, { Component } from "react";
import "./CreateAccountForm.css";

class CreateAccountForm extends Component {
  render() {
    return (
      <form className="CreateAccountForm">
        <div className="CreateAccountForm__first_name">
          <label htmlFor="first_name">First Name: </label>
          <input name="first_name" id="first_name" required type="text" />
        </div>
        <div className="CreateAccountForm__last_name">
          <label htmlFor="last_name">Last Name: </label>
          <input name="last_name" id="last_name" required type="text" />
        </div>
        <div className="CreateAccountForm__username">
          <label htmlFor="username">Username: </label>
          <input name="username" id="username" required type="text" />
        </div>
        <div className="CreateAccountForm__email">
          <label htmlFor="email">Email: </label>
          <input name="email" id="email" required type="email" />
        </div>
        <div className="CreateAccountForm__confirm_email">
          <label htmlFor="confirm_email">Confirm Email: </label>
          <input
            name="confirm_email"
            id="confirm_email"
            required
            type="email"
          />
        </div>
        <div className="CreateAccountForm__password">
          <label htmlFor="password">Password: </label>
          <input name="password" id="password" required type="password" />
        </div>
        <div className="CreateAccountForm__confirm_password">
          <label htmlFor="confirm_password">Confirm Password: </label>
          <input
            name="confirm_password"
            id="confirm_password"
            required
            type="password"
          />
        </div>
        <div className="CreateAccountForm__buttons">
          <button type="submit">Create Account</button>
          <button type="button">Login</button>
        </div>
      </form>
    );
  }
}

export default CreateAccountForm;
