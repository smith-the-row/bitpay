/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Contact-Form/Form";
import Address from "../components/Contact-Info/Address";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Form />
      <Address />
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
