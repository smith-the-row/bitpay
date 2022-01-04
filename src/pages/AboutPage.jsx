import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info/Info";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
import Questions from "../components/faq/Questions";
import Navbar from "../components/Navbar/Navbar";

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
      <Work />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
