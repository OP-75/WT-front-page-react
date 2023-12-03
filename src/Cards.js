import React from "react";
import tick from "./tick.svg";
import './Cards.css'

export default function Cards() {
  return (
    <div className="cards-container">


      <div className="card">
        <h3>Premium</h3>

        <ul>
          <li>
            <img className="tick" src={tick} alt="" /> <p>Cloud Storage</p>
          </li>
          <li>
            <img className="tick" src={tick} alt="" /> <p>24x7 Support</p>
          </li>
          <li>
            <img className="tick" src={tick} alt="" />{" "}
            <p>Access to exclusive feature</p>
          </li>
        </ul>

        <p>$100 / month</p>
        <button>Buy Now</button>
      </div>

      <div className="card">
        <h3>Premium</h3>

        <ul>
          <li>
            <img className="tick" src={tick} alt="" /> <p>Cloud Storage</p>
          </li>
          <li>
            <img className="tick" src={tick} alt="" /> <p>24x7 Support</p>
          </li>
          <li>
            <img className="tick" src={tick} alt="" />{" "}
            <p>Access to exclusive feature</p>
          </li>
        </ul>

        <p>$100 / month</p>
        <button>Buy Now</button>
      </div>

      <div className="card">
        <h3>Premium</h3>

        <ul>
          <li>
            <img className="tick" src={tick} alt="" /> <p>Cloud Storage</p>
          </li>
          <li>
            <img className="tick" src={tick} alt="" /> <p>24x7 Support</p>
          </li>
          <li>
            <img className="tick" src={tick} alt="" />{" "}
            <p>Access to exclusive feature</p>
          </li>
        </ul>

        <p>$100 / month</p>
        <button>Buy Now</button>
      </div>



    </div>
  );
}
