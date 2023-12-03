import React from "react";
import frontPageImg from "./front-page-image.png";
import "./MainPage.css";
import tick from "./tick.svg";

export default function MainPage() {
  return (
    <div className="flex-row">
      <div className="split left centered">
        <h1>
          Convient, Scalable with Cloud backups.
          <a href="">Book your demo now</a>
        </h1>
        <p>
          TranScribe Billing Solutions is a cutting-edge startup dedicated to
          revolutionizing the way businesses manage and handle their billing
          processes. Our innovative billing software, meticulously crafted by a
          team of experts, is designed to streamline and simplify the
          complexities of invoicing, payment tracking, and financial
          reporting.At TranScribe, we believe in providing businesses with a
          powerful and intuitive platform that not only automates mundane
          billing tasks but also enhances overall efficiency. Our solution is
          tailored to meet the unique needs of various industries, offering
          customizable features that adapt to the specific requirements of each
          client.
        </p>

        <div className="flex-row">
          <ul>
            <li>
              <img className="tick" src={tick} alt="" /> <p>Amazing</p>
            </li>
            <li>
              <img className="tick" src={tick} alt="" /> <p>Amazing</p>
            </li>
            <li>
              <img className="tick" src={tick} alt="" /> <p>Amazing</p>
            </li>
            <li>
              <img className="tick" src={tick} alt="" /> <p>Amazing</p>
            </li>
          </ul>
          <ul>
            <li>
              <img className="tick" src={tick} alt="" /> <p>Amazing</p>
            </li>
            <li>
              <img className="tick" src={tick} alt="" /> <p>Amazing</p>
            </li>
            <li>
              <img className="tick" src={tick} alt="" /> <p>Amazing</p>
            </li>
            <li>
              <img className="tick" src={tick} alt="" /> <p>Amazing</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="split right centered flex-row">
        <img src={frontPageImg} alt="front page img" />
      </div>
    </div>
  );
}
