import React from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url(/img/bg-img.jpg)",
          height: "70vh",
          position: "relative",
        }}
      >
        <div className="hero__overlay">
          <div className="container py-5 d-flex flex-column ">
            <div>
              <h1 className="text-white text-center text-uppercase fs-1 fw-bold">
                Financial Investments
              </h1>
            </div>
          </div>
          <div className="container">
            <p className="text-center text-white ">
              Bitpay Trading Signals is a group of financial and cryptocurrency
              experts that invest in mining and cryptocurrency trading. We
              carefully examine the volatility of bitcoin and other crypto
              currencies, invest and make good profit from our investments.
            </p>
          </div>
          <div className="text-center mx-auto">
            <Link to="/register" className="btn btn-primary fs-5 text-sec">
              Get Started <FaChevronCircleRight className="ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
