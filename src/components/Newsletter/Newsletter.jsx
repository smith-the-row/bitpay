import React from "react";
import "./letter.css";

const Newsletter = () => {
  return (
    <div className="letter">
      <div className="letter__container">
        <div className="letter__title">
          <h1 className="fs-2 fw-bolder">
            Subscribe to Our Newsletter to get latest News
          </h1>
        </div>
        <div className="letter__input">
          <input type="email" placeholder="Your Email Address" />
          <button className="btn btn-primary mt-2">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
