import React from "react";
import "./letter.css";

const Newsletter = () => {
  return (
    <div className="letter bg-dark">
      <div className="letter__container">
        <div className="letter__title">
          <h1>Subscribe to Our Newsletter to get latest News</h1>
        </div>
        <div className="letter__input">
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
