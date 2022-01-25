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
          <Link to="/">
            <div className="img-res">
              <h1 className="title">CoinSignalPro</h1>
            </div>
          </Link>
          <div>
            <Link to="/" className="links text-sec">
              Home
            </Link>
            <Link to="/about" className="links text-sec">
              About
            </Link>
            <Link to="/contact" className="links text-sec">
              Contact
            </Link>
          </div>
          <div>
            <Link to="/register" className="cta-1 text-sec">
              Begin Here
            </Link>
            <Link to="/login" className="cta-2 text-sec">
              Login
            </Link>
          </div>
          <div className="bars">
            {active ? (
              <FaTimes className="bars" size="20px" onClick={toggle} />
            ) : (
              <FaBars className="bars" size="20px" onClick={toggle} />
            )}
          </div>
        </div>
        <div className={active ? "sidenav active" : "sidenav"}>
          <div className="px-4 py-3 d-flex flex-column ">
            <Link to="/" className="my-2 fs-sec w-100 text-white text-sec">
              Home
            </Link>
            <Link to="/about" className="my-2  w-100 text-white text-sec">
              About
            </Link>
            <Link to="/contact" className="my-2   w-100 text-white text-sec">
              Contact
            </Link>
            <Link
              to="/register"
              className="my-2 w-100 btn btn-success text-white text-sec "
            >
              Begin Here
            </Link>
            <Link
              to="/login"
              className="my-2 btn btn-outline-success w-100 text-white text-sec"
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
