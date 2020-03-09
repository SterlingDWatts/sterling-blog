import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <div className="LoginForm__username">
          <label htmlFor="username">Username: </label>
          <input name="username" id="username" required type="text" />
        </div>
        <div className="LoginForm__password">
          <label htmlFor="password">Password: </label>
          <input name="password" id="password" required type="password" />
        </div>
        <div className="LoginForm__buttons">
          <button type="submit">Login</button>
          <button type="button">Create Account</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
