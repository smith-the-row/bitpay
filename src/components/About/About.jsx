import React from "react";
import { FaChartBar, FaCalendarCheck, FaLock, FaHeadset } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./about.css";

const About = () => {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#27ae61", size: "1.8rem" }}>
        <div className="py-5">
          <div className="container d-flex flex-column">
            <div className="text-center">
              <h1 className="fw-bolder">
                Create your cryptocurrency portfolio today
              </h1>
              <p className="text-muted">
                CoinSignalPro has a variety of features that make it the best
                place to start trading
              </p>
            </div>
            <div className="grid mt-4">
              <div className="d-flex flex-column align-items-center">
                <div>
                  <FaChartBar />
                </div>
                <div className="text-center">
                  <h4 className="my-2">Manage your portfolio</h4>
                  <p className="text-muted">
                    Buy and sell popular digital currencies, keep track of them
                    in the one place.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>
                  <FaCalendarCheck />
                </div>
                <div className="text-center">
                  <h4 className="my-2">Order Types</h4>
                  <p className="text-muted">
                    We offer a suite of order types to give traders the tool
                    they need for every scenario
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>
                  <FaLock />
                </div>
                <div className="text-center">
                  <h4 className="my-2">Security</h4>
                  <p className="text-muted">
                    Security of user information and funds is our first
                    priority.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>
                  <FaHeadset />
                </div>
                <div className="text-center">
                  <h4 className="my-2">Technology</h4>
                  <p className="text-muted">
                    We work with Google servers with the highest reliability &
                    99.99% uptime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default About;
