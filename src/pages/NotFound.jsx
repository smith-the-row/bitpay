import React from "react";
import { Link } from "react-router-dom";
import Undraw from "../img/404.svg";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <div className="w-25">
        <img src={Undraw} alt="not found" />
      </div>
      <div className="mt-5">
        <Link to="/" className="text-success">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
