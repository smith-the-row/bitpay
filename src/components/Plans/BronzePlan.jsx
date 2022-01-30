import React from "react";
import { Link } from "react-router-dom";
import { bronzePlan } from "./bronze";
import "./plan.css";

const BasicPlan = () => {
  return (
    <div>
      <div className="row">
        {bronzePlan.map((plan) => (
          <div className="col-sm-12 col-md-3 col-lg-3 ">
            <div className="plan__card p-5 shadow">
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
                <Link to="/register" className="btn btn-success text-sec">
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

export default BasicPlan;
