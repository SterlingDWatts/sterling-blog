import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Utils/Utils";
import classnames from "classnames";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    showSideNav: false,
    prevScrollPos: window.pageYOffset,
    visible: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleLogout = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  };

  toggleSideNav = () => {
    this.setState({
      showSideNav: !this.state.showSideNav
    });
  };

  handleLogoutSideNav = () => {
    this.handleLogout();
    this.toggleSideNav();
  };

  renderLogoutLink() {
    return (
      <>
        <Link to="/blogs/create-blog" onClick={this.toggleSideNav}>
          Create Blog
        </Link>
        <Link onClick={this.handleLogoutSideNav} to="/blogs">
          Logout
        </Link>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <Link to="/login" onClick={this.toggleSideNav}>
          Login
        </Link>
        <Link to="/create-account" onClick={this.toggleSideNav}>
          Create Account
        </Link>
      </>
    );
  }

  renderSideNav = () => {
    return (
      <nav className="SideNav">
        <Button
          className="SideNav__hamburger_button"
          type="button"
          onClick={this.toggleSideNav}
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <Link to="/blogs" onClick={this.toggleSideNav}>
          Blogs
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  };

  render() {
    return (
      <nav
        className={classnames("NavBar", {
          "NavBar--hidden": !this.state.visible
        })}
      >
        <div className="NavBar__container">
          <div className="NavBar__marque">
            <Link to="/blogs">Sterling | Blog</Link>
          </div>
          <nav className="NavBar__links_big">
            <Link to="/blogs/create-blog">Create Blog</Link>
            {TokenService.hasAuthToken() ? (
              <Link to="/blogs">Logout</Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/create-account">Create Account</Link>
              </>
            )}
          </nav>
          <Button
            className="hamburger_button"
            type="button"
            onClick={this.toggleSideNav}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
        {this.state.showSideNav && this.renderSideNav()}
      </nav>
    );
  }
}

export default NavBar;
