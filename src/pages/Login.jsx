import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/login-form/Form";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <React.Fragment>
      <Form />
    </React.Fragment>
  );
};

export default Login;
