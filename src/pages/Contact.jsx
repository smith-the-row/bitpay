/*eslint-disable */
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Contact-Form/Form";
import Address from "../components/Contact-Info/Address";

const Contact = () => {
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
