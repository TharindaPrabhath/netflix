import React, { Component } from "react";

import "../styles/Footer.css";

import FacebookIcon from "../assets/icon-facebook.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__icons">
          <a href="#">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="#">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="#">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
          <a href="#">
            <img src={YoutubeIcon} alt="Youtube" />
          </a>
        </div>

        <div className="footer__links">
          <div>
            <a href="#">Audio and Subtitles</a>
            <a href="#">Media Center</a>
            <a href="#">Privacy</a>
          </div>
          <div>
            <a href="#">Audio Description</a>
            <a href="#">Investor Relations</a>
            <a href="#">Legal Notices</a>
          </div>
          <div>
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Corporate Information</a>
          </div>
          <div>
            <a href="#">Gift Cards</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Copyrights 1997-2021 Netflix, Inc.</p>
          <p>Clone created by Tharinda P Anurajeewa</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
