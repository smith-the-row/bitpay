import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  // control the input fields
  const [disable, setDisable] = useState(false);
  const [country, setCountry] = useState([]);

  // toast configuration
  toast.configure();
  // navigation router hook
  const naviagte = useNavigate();
  // refs for form
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();

  // fetch countries

  const fetchCountry = async () => {
    try {
      const apiCall = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const response = await apiCall.json();
      const countriesAndCities = response.data;

      const countries = countriesAndCities.map((country) => {
        return {
          main: country.country,
        };
      });
      setCountry(countries);
    } catch (error) {
      console.log(error);
      setDisable(true);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !nameRef.current.value |
      !emailRef.current.value |
      !phoneRef.current.value |
      !passwordRef.current.value |
      !countryRef.current.value
    ) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    //create the user in firebase and then save to firestore
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // send verification
      sendEmailVerification(user);
      // set the backdrop

      // add to the database
      await setDoc(doc(store, "users", emailRef.current.value), {
        email: user.email,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
        country: countryRef.current.value,
        balance: 0,
        profit: 0,
        bonus: 0,
        deposited: 0,
        refBonus: 0,
        totalPackages: 0,
        activePages: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
      });
      // toast notification
      toast.success("Welcome to CoinSignalPro Please verify your email", {
        position: "top-center",
        theme: "colored",
      });
      // redirect user to login
      naviagte("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Email is already in use", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/weak-password") {
        toast("Password Should be Greater than six characters", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/invalid-email") {
        toast("Invalid Email", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="form py-5">
      <div className="form__card shadow p-3 rounded mt-2">
        <div className="form__body">
          <div className="form__title text-center my-5">
            <Link to="/" className="fs-1 fw-bolder text-main text-success">
              CoinSignalPro
            </Link>
            <p className="text-muted">
              If you already have an account with us click here to{" "}
              <Link to="/login" className="t-m">
                Login
              </Link>
            </p>
          </div>
          <div className="form__container">
            <div className="row my-3">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input type="text" ref={nameRef} className="form-control" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 sm-mt-2">
                <div>
                  <label htmlFor="Name" className="form-label">
                    Email
                  </label>
                  <input type="email" ref={emailRef} className="form-control" />
                </div>
              </div>
            </div>

            <div className="my-3">
              <label htmlFor="telephone" className="form-label">
                Phone Number
              </label>
              <input type="tel" ref={phoneRef} className="form-control" />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                ref={passwordRef}
                className="form-control"
              />
            </div>
            <div className="my-3">
              <label htmlFor="phrase" className="form-label">
                Choose Country
              </label>
              <select
                ref={countryRef}
                className="form-control"
                disabled={disable}
              >
                {country.map((state, index) => (
                  <option key={index} value={state.main}>
                    {state.main}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-1 text-center">
              <p className="text-muted">
                By Clicking Register you therefore agree to the{" "}
                <Link to="/terms" className="t-m">
                  Terms & Conditions
                </Link>
                {""}of CoinSignalPro
              </p>
            </div>
            <button
              className="btn btn-block btn-success block"
              onClick={saveUser}
            >
              Register
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-success">
              © Copyright 2021 CoinSignalPro All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
