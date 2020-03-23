import React from "react";
import { Link } from "react-router-dom";
import { getToken } from "../utils/api";

import LoginModal from "./auth/LoginModal";
import RegisterModal from "./auth/RegisterModal";

import "../css/Home.css";
import Image1 from "../images/cardio.jpg";

import styled from "styled-components";

function Home() {
  const signedIn = getToken("token");

  return (
    <>
      {/* Hero Start */}
      <section className="hero" id="hero">
        <div className="container">
          <h2 className="sub-headline sub-headline-main">
            <span className="first-letter">W</span>elcome
          </h2>
          <h1 className="headline headline-main">Anywhere Fitness</h1>
          <div className="headline-description">
            <div className="separator">
              <div className="line line-left"></div>
              <div className="asterisk">
                <i class="fas fa-asterisk" />
              </div>
              <div className="line line-right"></div>
            </div>
            <div>
              <h5>Change your life</h5>
              <span className="main-btns">
                {!signedIn && (
                  <>
                    {/* <Link to="/login" className="btn cta-btn main-btn">
                      Login
                    </Link> */}
                    <LoginModal />
                    {/* <Link to="/register" className="btn cta-btn main-btn">
                      sign Up
                    </Link> */}
                    <RegisterModal />
                  </>
                )}
                {signedIn && (
                  <>
                    <Link to="/logout" className="btn cta-btn main-btn">
                      Logout
                    </Link>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}

      {/* Discorver Start */}
      <section className="discover-our-story">
        <div className="container">
          <div className="gym-info">
            <div className="gym-description padding-right animate-left">
              <div className="global-headline">
                <h2 className="sub-headline">
                  <span className="first-letter">D</span>iscover
                </h2>
                <h1 className="headline headline-dark">Our Story</h1>
                <div className="asterisk">
                  <i class="fas fa-asterisk" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="#" className="btn body-btn">
                About Us
              </a>
            </div>
            <div className="gym-info-img animate-right">
              <img src={Image1} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Discorver End */}

      {/* Success Stories Starts */}
      <section className="success-stories">
        <div className="container">
          <div className="gym-info">
            <div className="image-group">
              <img className="animate-top" src={Image1} alt="" />
              <img className="animate-bottom" src={Image1} alt="" />
              <img className="animate-bottom" src={Image1} alt="" />
              <img className="animate-bottom" src={Image1} alt="" />
            </div>
            <div className="gym-description padding-left animate-left">
              <div className="global-headline">
                <h2 className="sub-headline">
                  <span className="first-letter">S</span>uccess
                </h2>
                <h1 className="headline headline-dark">Stories</h1>
                <div className="asterisk">
                  <i class="fas fa-asterisk" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="#" className="btn body-btn">
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Success Stories Ends */}

      {/* Footer Start */}
      <footer>
        <div className="container">
          <div className="back-to-top">
            <a href="#">
              <i class="fas fa-chevron-up" />
            </a>
          </div>
          <div className="footer-content">
            <div className="footer-content-about animate-top">
              <h4>Anywhere Fitness</h4>
              <div className="asterisk">
                <i class="fas fa-asterisk" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="footer-content-divider animate-bottom">
              <div className="social-media">
                <h4>Follow Along</h4>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-tripadvisor" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="newsletter-container">
                <h4>Newsletter</h4>
                <form action="" className="newsletter-form">
                  <input
                    type="text"
                    className="newsletter-input"
                    placeholder="email"
                  />
                  <button className="newsletter-btn" type="submit">
                    <i class="fas fa-envelope" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
}

export default Home;
