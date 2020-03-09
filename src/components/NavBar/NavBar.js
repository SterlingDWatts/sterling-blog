import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar__container">
          <div className="NavBar__marque">
            <Link to="/blogs">Sterling | Blog</Link>
          </div>
          <nav className="NavBar__links">
            <Link to="/blogs/create-blog">Create Blog</Link>
            <Link to="/login">Login</Link>
            <Link to="/create-account">Create Account</Link>
          </nav>
        </div>
      </nav>
    );
  }
}

export default NavBar;
