import React from "react";
import logo from "./logo.svg";
import "./MyNavbar.css";

export default function MyNavbar() {
  return (
    <nav className="navbar">
      <div className="company-info-nav">
        <a href="/">
          <img src={logo} alt="T-Billing logo" />
        </a>
        <a href="/">
          <h3>T-Bills</h3>
        </a>
      </div>

      <div className="buttons-container">
        <button type="button">About us</button>
        <button type="button">Get a Quote</button>
        <button type="button">Sign up for a Trial</button>
        <button type="button">Contact us</button>
      </div>
    </nav>
  );
}
