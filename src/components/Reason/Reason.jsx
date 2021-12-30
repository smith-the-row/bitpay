import React from "react";
import "./reason.css";
import { IconContext } from "react-icons";
import {
  FaGlobeEurope,
  FaLock,
  FaPaypal,
  FaChartBar,
  FaWallet,
  FaHammer,
} from "react-icons/fa";

const Reason = () => {
  return (
    <IconContext.Provider value={{ size: "1.6rem", color: "#27ae61" }}>
      <div className="bg-dark text-white">
        <div className="container d-flex flex-column">
          <div className="my-4 text-center">
            <h1>Why Choose CoinSignalPro ?</h1>
            <p>
              We are combining all the key aspects of conducting an efficient
              cryptocurrency mining activity. From building a highly efficient
              data center to providing a robust mining system for our users.
            </p>
          </div>
          <div className="row">
            <div className="my-3 col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div>
                <FaGlobeEurope />
              </div>
              <div className="text-center mt-1">
                <h4>Multilingual</h4>
                <p>countries we have a multilingual feature in your system.</p>
              </div>
            </div>
            <div className="my-3 col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div>
                <FaLock />
              </div>
              <div className="text-center mt-1">
                <h4>Secure And Private</h4>
                <p>
                  We support cryptocurrencies that promote privacy, so we try to
                  keep user data collected to a minimum and will only require
                  information.
                </p>
              </div>
            </div>
            <div className="my-3 col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div>
                <FaPaypal />
              </div>
              <div className="text-center mt-1">
                <h4>Easy Payment System</h4>
                <p>
                  We have 5+ payment methods in our system. You can easily
                  complete your payment.
                </p>
              </div>
            </div>
            <div className="my-3 col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div>
                <FaChartBar />
              </div>
              <div className="text-center mt-1">
                <h4>Intuitive Dashboard</h4>
                <p>
                  Our system dashboard contains all your crypto mining data and
                  charts.
                </p>
              </div>
            </div>
            <div className="my-3 col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div>
                <FaWallet />
              </div>
              <div className="text-center mt-1">
                <h4>Daily Mining Output</h4>
                <p>
                  Our system will automatically add your daily mining results to
                  your account. Also, you are able to withdraw that amount.
                </p>
              </div>
            </div>
            <div className="my-3 col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div className="mb-2">
                <FaHammer />
              </div>
              <div className="text-center mt-1">
                <h4>Robust Mining Technology</h4>
                <p>
                  For each of the blockchain algorithms that we have proposed,
                  we are providing some of the highest performance mining
                  systems available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Reason;
