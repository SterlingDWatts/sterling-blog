import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer__container">
          <a href="https://www.github.com/SterlingDWatts">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/sterlingdwatts">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.facebook.com/sterlingdwatts">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/sterlingdwatts">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.twitter.com/sterlingdwatts">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
