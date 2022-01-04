import React from "react";
import { Link } from "react-router-dom";
import "./plan.css";

const Plan = () => {
  return (
    <div className="plan" id="plan">
      <div className="plan__container">
        <div className="plan__title">
          <h1 className="fw-bolder">Choose your Prefered Plan</h1>
          <p>
            Choose your plans and increase your mining speed and make more
            coins!
          </p>
        </div>
        <div className="plan__grid ">
          <div className="plan__card shadow">
            <h2>Starter</h2>
            <div className="plan__amt">
              <h3>
                $<span>5000</span>
              </h3>
            </div>
            <div className="plan__reward">
              <p>Reward:0.00095Btc/day</p>
              <p>Duration: 6 Months</p>
            </div>
            <div className="my-2">
              <Link to="/register" state="starter" className="plan__cta">
                Start Now
              </Link>
            </div>
          </div>
          <div className="plan__card shadow">
            <h2>Mid</h2>
            <div className="plan__amt">
              <h3>
                $<span>15000</span>
              </h3>
            </div>
            <div className="plan__reward">
              <p>Reward:0.00105Btc/day</p>
              <p>Duration: 6 Months</p>
            </div>
            <div className="my-2">
              <Link to="/register" state="mid" className="plan__cta">
                Start Now
              </Link>
            </div>
          </div>
          <div className="plan__card shadow">
            <h2>Expert</h2>
            <div className="plan__amt">
              <h3>
                $<span>20000</span>
              </h3>
            </div>
            <div className="plan__reward">
              <p>Reward:0.02001Btc/day</p>
              <p>Duration: 6 Months</p>
            </div>
            <div className="my-2">
              <Link to="/register" state="expert" className="plan__cta">
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
