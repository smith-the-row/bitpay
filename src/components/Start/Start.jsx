import React from "react";
import { Link } from "react-router-dom";
import "./start.css";

const Start = () => {
  return (
    <div className="start bg-dark">
      <div className="start__grid">
        <div className="start__text">
          <h1 className="text-success fw-bold">Ready To Start Your Mining</h1>
          <p>Just create an account on our site and start your first mining.</p>
        </div>
        <div className="start__btn">
          <Link to="register" className="btn btn-success text-sec">
            Start Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
