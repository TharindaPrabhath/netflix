import React, { Component } from "react";

import "../styles/SignInScreen.css";

import NetflixLogo from "../assets/netflix-logo.png";
import FacebookIcon from "../assets/icon-facebook.svg";

function SignInScreen() {
  return (
    <div className="signin-screen">
      <div className="signin-screen__content">
        <img src={NetflixLogo} alt="" className="content__logo" />
        <div className="content__body">
          <h1>Sign In</h1>
          <form>
            <input
              type="text"
              className="email"
              placeholder="Email or phone number"
            />
            <input
              type="password"
              className="password"
              placeholder="Password"
            />
            <button className="signIn-btn">Sign In</button>
            <div className="extras">
              <label className="remember-me">
                <input type="checkbox" className="check-box" />
                Remember me
              </label>

              <a href="#">Need help?</a>
            </div>
          </form>

          <div className="extras-2">
            <a href="">
              <img src={FacebookIcon} alt="Facebook" /> Login with Facebook
            </a>
            <div>
              <span>
                New to Netflix? <a href="#">Sign up now</a>
              </span>
            </div>
          </div>
        </div>

        <div className="content__footer">
          <a href="#">Questions? Contact us.</a>

          <div>
            <div className="left-col">
              <a href="#">FAQ</a>
              <a href="#">Terms of Use</a>
              <a href="#">Cookie Preferences</a>
            </div>

            <div className="right-col">
              <a href="#">Help Center</a>
              <a href="#">Privacy</a>
              <a href="#">Corporate Information</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;
