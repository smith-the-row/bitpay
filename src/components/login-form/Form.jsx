import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import "./form.css";

const Form = () => {
  // navigation
  const navigate = useNavigate();
  // toast config
  toast.configure();
  // login form Ref
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (!emailRef.current.value | !passwordRef.current.value) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    // sign in user
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // store the token in session
      sessionStorage.setItem("token", user.user.refreshToken);
      // redirect to dashboard
      toast.success("Welcome Back !!", {
        position: "top-center",
        theme: "colored",
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast("Password is Incorrect", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/user-not-found") {
        toast("User Not Found", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value) {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        sendPasswordResetEmail(auth, emailRef.current.value);
        toast.info("Check Your Email for a reset Link", {
          theme: "colored",
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="form pd">
      <div className="form__card shadow rounded my-5 p-3">
        <div className="form__title text-center">
          <Link to="/" className="fs-1 fw-bolder text-main text-success">
            CoinSignalPro
          </Link>
          <p>
            Click here to{" "}
            <Link to="/register" className="text-success">
              Create Account
            </Link>
          </p>
        </div>
        <div className="form__container my-3">
          <div className="my-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" ref={emailRef} className="form-control" />
          </div>
          <div className="my-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" ref={passwordRef} className="form-control" />
          </div>
          <div className="text-left my-3">
            <Link
              to="/"
              className="text-muted text-sec"
              onClick={resetPassword}
            >
              Forgot Password
            </Link>
          </div>
          <button className="btn btn-success btn-block" onClick={loginUser}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
