import React from "react";
import { IconContext } from "react-icons";
import { FaUser, FaPiggyBank, FaExchangeAlt } from "react-icons/fa";
import "./work.css";

const Work = () => {
  return (
    <IconContext.Provider value={{ color: "#0e204e", size: "2rem" }}>
      <div className="work mt-4">
        <div className="work__container">
          <div className="work__title">
            <h1 className="fw-bolder">Start Mining Live in Few Minutes</h1>
            <p>Bitpay supports a wide Range of cryptocurrency</p>
          </div>
          <div className="work__grid">
            <div className="work__card">
              <div>
                <FaUser />
              </div>
              <div className="mt-2">
                <h4 className="py-2 fs-5">Create Account</h4>
              </div>
            </div>
            <div className="work__card">
              <div>
                <FaPiggyBank />
              </div>
              <div className="mt-2">
                <h4 className="py-2 fs-5">Fund Account</h4>
              </div>
            </div>
            <div className="work__card">
              <div>
                <FaExchangeAlt />
              </div>
              <div className="mt-2">
                <h4 className="py-2 fs-5">Start Mining</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Work;
