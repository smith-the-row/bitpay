import React from "react";
import { IconContext } from "react-icons";
import { FaMapMarker, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./address.css";

const Address = () => {
  return (
    <IconContext.Provider value={{ color: "#081125", size: "1.8rem" }}>
      <div className="address">
        <div className="address__container">
          <div className="address__card">
            <div>
              <FaMapMarker />
            </div>
            <div>
              <h1 className="fs-4">Address</h1>
              <p>
                Bitpay Head office US: 2944 N 44th Street,Phoenix,AZ 85018
                <br />
                UK:First Floor ,Omega Building,Smugglers Way,Wandsworth,SW18
              </p>
            </div>
          </div>
          <div className="address__card">
            <div>
              <FaEnvelope />
            </div>
            <div>
              <h1 className="fs-4">Email</h1>
              <p>info@Bitpay.co</p>
            </div>
          </div>
          <div className="address__card">
            <div>
              <FaPhoneAlt />
            </div>
            <div>
              <h1 className="fs-4">Phone</h1>
              <p>Call Us Now +1 (262)-696-9967</p>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Address;
