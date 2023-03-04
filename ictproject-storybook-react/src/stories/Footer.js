import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div class="flex-container-footer">
      <div class="flex-item">
        <h4>Our Story</h4>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Ut sodales suscipit diam, non molestie libero
          efficitur ac. Vivamus quis iaculis ante. Quisque lectus libero,
          commodo sed maximus eu, pharetra id dui. Donec et elit sed nisl
          laoreet bibendum. Ut id magna nulla. Pellentesque convallis facilisis
          orci.
        </p>
      </div>
      <div class="flex-item">
        <h4>Lets Keep in Touch! </h4>
        <a
          href="https://www.youtube.com"
          className="youtube social"
          alt="youtube"
          aria-label="Click here to go to YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          className="facebook social"
          alt="facebook"
          aria-label="Click here to go to FaceBook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          className="twitter social"
          alt="twitter"
          aria-label="Click here to go to Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          className="instagram social"
          alt="instagram"
          aria-label="Click here to go to Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
