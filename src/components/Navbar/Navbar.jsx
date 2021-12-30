import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  return (
    <React.Fragment>
      <nav>
        <div className="container">
          <div>
            <h4 className="title">CoinSignalPro</h4>
          </div>
          <div>
            <Link to="/" className="links ">
              Home
            </Link>
            <Link to="/about" className="links ">
              About
            </Link>
            <Link to="/contact" className="links ">
              Contact
            </Link>
          </div>
          <div>
            <Link to="/register" className="cta-1">
              Begin Here
            </Link>
            <Link to="/login" className="cta-2">
              Login
            </Link>
          </div>
          <div className="bars">
            {active ? (
              <FaTimes className="bars" onClick={toggle} />
            ) : (
              <FaBars className="bars" onClick={toggle} />
            )}
          </div>
        </div>
        <div className={active ? "sidenav active" : "sidenav"}>
          <div className="px-4 py-3 d-flex flex-column ">
            <Link to="/" className="my-2 fs-sec w-100 text-white">
              Home
            </Link>
            <Link to="/about" className="my-2  w-100 text-white">
              About
            </Link>
            <Link to="/contact" className="my-2   w-100 text-white">
              Contact
            </Link>
            <Link
              to="/register"
              className="my-2 w-100 btn btn-success text-white "
            >
              Begin Here
            </Link>
            <Link
              to="/login"
              className="my-2 btn btn-outline-success w-100 text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
