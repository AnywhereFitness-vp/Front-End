import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { getToken } from "../utils/api";
import ProtectedRoute from "../utils/ProtectedRoute";

import Home from "./Home";
import Login from "./auth/Login";
import LoginModal from "./auth/LoginModal";
import Register from "./auth/Register";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import InstructorsList from "./InstructorsList";
import ClassesPage from "./ClassesPage";
import Testimonials from "./Testimonials";
import ClassEdits from "./instructors/EditClass";

import styled from "styled-components";

const NavLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 500;
`;

function NavBar() {
  const signedIn = getToken("token");

  return (
    <>
      <header>
        <div className="container">
          <nav className="nav">
            <div className="menu-toggle">
              <i class="fas fa-bars" />
              <i class="fas fa-times" />
            </div>
            <a to="/" className="logo">
              <img src="source" alt="" />
            </a>
            {!signedIn && (
              <ul className="nav-list">
                {/* <li className="nav-item">
                  <LoginModal />
                </li>
                <li className="nav-item">
                  <RegisterModal />
                </li> */}
              </ul>
            )}
            {signedIn && (
              <ul className="nav-list">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/classes" className="nav-link">
                    Classses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link">
                    Logout
                  </NavLink>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>

      <Route exact path="/" component={Home} />
      <Route exact path="/testimonials" component={Testimonials} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />

      <ProtectedRoute exact path="/classes" component={ClassesPage} />
      <ProtectedRoute exact path="/instructors" component={InstructorsList} />
      <ProtectedRoute exact path="/logout" component={Logout} />

      <Route exact path="/classedit/:id" component={ClassEdits} />
    </>
  );
}

export default withRouter(NavBar);

const TopBar = styled.div`
  background-color: #212121;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
`;
const TopBarTitle = styled.h1`
  color: steelblue;
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 25%;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: steelblue;
  font-size: 1.2rem;
  font-weight: bold;
`;
