import React from "react";
import Info from "../components/Info/Info";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
import Questions from "../components/faq/Questions";
import Navbar from "../components/Navbar/Navbar";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Info />
      <Work />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
