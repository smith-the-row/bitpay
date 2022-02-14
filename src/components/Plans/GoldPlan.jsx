import React from "react";
import { Link } from "react-router-dom";
import { goldPlan } from "./gold";
import "./plan.css";

const GoldPlan = () => {
  return (
    <div>
      <div className="row">
        {goldPlan.map((plan) => (
          <div className="col-sm-12 col-md-4 col-lg-4 mt-3 ">
            <div className="plan__card px-1 py-2 shadow">
              <div>
                <h1 className="fw-bolder fs-1">{`$${plan.invest}`}</h1>
              </div>
              <div className="my-3">
                <h2 className="fw-bold fs-3">{plan.hashRate}</h2>
              </div>
              <div className="my-2">
                <p>Maintenance Fees per KH/s/day: {plan.maintainFee}</p>
              </div>
              <div className="plan-reward">
                <p>Reward: {`$${plan.reward}`}</p>
                <p>Duration: {plan.duration}</p>
              </div>
              <div className="my-4">
                <Link to="/register" className="btn btn-primary text-sec">
                  Start Now !!{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldPlan;
