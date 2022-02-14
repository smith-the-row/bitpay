import React from "react";
import { aboutUs } from "./aboutUs";

const Guide = () => {
  return (
    <div className="container d-flex flex-column">
      <div className="row">
        {aboutUs.map((about) => (
          <div className="col-sm-12 col-md-6 col-sm-6" key={about.id}>
            <h3 className="fs-3 fw-bolder">{about.title}</h3>
            <p className="text-muted">{about.about}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="fw-bolder fs-2">MBS Registration</h3>
        <div>
          <p className="text-muted">
            bitpay is the most trustworthy platform. We are now a fully
            registered Money Services Business (MSB) with the Financial Crimes
            Enforcement Network Department. Safely deposit and trade your funds
            on a platform that is entirely worry-free.
          </p>
        </div>
        <div className="mt-3">
          <p className="text-muted">Central Registration Depository: 166124</p>
          <p className="text-muted">
            U.S. Securities and Exchange Commission: 801-106722
          </p>
          <p className="text-muted">Registration Type: Initial Registration</p>
          <p className="text-muted">Legal Name: Windrock Wealth Management</p>
          <p className="text-muted">Alternative Name: Cryptox Advisory</p>
          <p className="text-muted">DBA Name:</p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
