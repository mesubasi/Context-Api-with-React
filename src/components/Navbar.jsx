import React from "react";
import { NavLink } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Context API
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/">
                Home Page
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <ThemeIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
