import React, { Component, useState } from "react";

import "../styles/WelcomeScreen.css";

import NetflixLogo from "../assets/netflix-logo.png";
import SignInScreen from "./SignInScreen";

function WelcomeScreen() {
  const [signIn, setSignIn] = useState(false);

  const clickedSignIn = () => {
    setSignIn(true);
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-screen__hero">
        <div className="hero__top">
          <img className="logo" src={NetflixLogo} alt="Netflix Logo" />
          {!signIn && (
            <button className="signin-btn" onClick={clickedSignIn}>
              Sign In
            </button>
          )}
        </div>

        <div className="hero__overlay"></div>
        <div className="hero__content">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="hero__content__input">
                <form>
                  <input type="email" placeholder="Email Address"></input>
                  <button className="get-started-btn">Get Started</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
