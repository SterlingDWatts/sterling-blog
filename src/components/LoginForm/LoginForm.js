import React, { Component } from "react";
import { Input, Button } from "../Utils/Utils";
import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <div className="LoginForm__username">
          <label htmlFor="username">Username: </label>
          <Input name="username" id="username" required type="text" />
        </div>
        <div className="LoginForm__password">
          <label htmlFor="password">Password: </label>
          <Input name="password" id="password" required type="password" />
        </div>
        <div className="LoginForm__buttons">
          <Button type="submit">Login</Button>
          <Button type="button">Create Account</Button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
