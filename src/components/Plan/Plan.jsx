import React from "react";
import { plans } from "./plans";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="mt-1 mb-2">
          <h1 className="text-align fw-bolder">Choose A Plan</h1>
        </div>
        <div className="row">
          {plans.map((plan) => (
            <div className="col-sm-12 col-md-6 col-lg-4 ">
              <Link to="/register">
                <div className="rounded bg-primary shadow mt-4 w-75 w-sm-100 p-2">
                  <h6 className="text-white text-center">{plan.title}</h6>
                  <h4 className="text-white text-center fw-bolder">
                    {plan.price}
                  </h4>
                  <div className="d-flex flex-column align-items-center justify-content-center text-white">
                    <p>Duration: {plan.Duration}</p>
                    <h5> 15% ROI </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plan;
