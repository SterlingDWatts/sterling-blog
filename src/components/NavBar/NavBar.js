import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar__container">
          <div className="NavBar__marque">
            <Link to="/">Sterling | Blog</Link>
          </div>
          <nav className="NavBar__links"></nav>
        </div>
      </nav>
    );
  }
}

export default NavBar;
