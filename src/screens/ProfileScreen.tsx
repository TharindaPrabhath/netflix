import React, { Component } from "react";

import "../styles/ProfileScreen.css";

import NetflixLogo from "../assets/netflix-logo.png";

function ProfileScreen() {
  return (
    <div className="profile-screen">
      <div className="content">
        <div className="content__header">
          <img src={NetflixLogo} alt="Netflix" className="logo" />
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
            alt="Profile Avatar"
            className="header__profile"
          />
        </div>

        <div className="content__body">
          <h1>Select a Plan</h1>
          <div className="body__cols">
            <div className="left-col">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
                alt="Profile Avatar"
                className="body__profile"
              />
            </div>

            <div className="right-col">
              <p className="user-email">tharindahp@gmail.com</p>
              <div className="plans">
                <h3>Plans</h3>
                <div className="plan">
                  <div className="plan__left-col">
                    <h4>Netflix Standard</h4>
                    <p>1080p</p>
                  </div>
                  <div className="plan__right-col">
                    <button className="subscribe-btn">Subscribe</button>
                  </div>
                </div>

                <div className="plan">
                  <div className="plan__left-col">
                    <h4>Netflix Basic</h4>
                    <p>480p</p>
                  </div>
                  <div className="plan__right-col">
                    <button className="subscribe-btn">Subscribe</button>
                  </div>
                </div>

                <div className="plan">
                  <div className="plan__left-col">
                    <h4>Netflix Premium</h4>
                    <p>4k</p>
                  </div>
                  <div className="plan__right-col">
                    <button className="subscribe-btn">Subscribe</button>
                  </div>
                </div>
              </div>
              <button className="sign-out-btn">Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
