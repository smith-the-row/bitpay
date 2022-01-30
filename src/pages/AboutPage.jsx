import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info/Info";
import Footer from "../components/Footer/Footer";
import Questions from "../components/faq/Questions";
import Navbar from "../components/Navbar/Navbar";
import Guide from "../components/about-us/Guide";

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <React.Fragment>
      <Navbar />
      <Info />
      <Guide />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
