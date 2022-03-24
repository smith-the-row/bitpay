import React, { useRef } from "react";
import "./form.css";
import Image from "../../img/contact.png";
import { toast } from "react-toastify";

const Form = () => {
  const nameRef = useRef();

  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  toast.configure();

  const sendMessage = (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !emailRef.current.value |
      !nameRef.current.value |
      !subjectRef.current.value |
      !messageRef.current.value
    ) {
      return toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    } else {
      return toast.success("message sent", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  return (
    <div className="contact">
      <div className="contact__grid">
        <div className="contact__img">
          <img src={Image} alt="" />
        </div>
        <div className="contact__form">
          <div className="contact__form-title mt-1">
            <h1>Let us here your complain</h1>
          </div>
          <div className="contact__form-grid">
            <div className="form__group">
              <label htmlFor="Name">Name</label>
              <input type="text" name="name" ref={nameRef} />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" ref={emailRef} />
            </div>
          </div>
          <div className="form__group mt-1">
            <label htmlFor="subject">Subject</label>
            <input type="email" name="subject" ref={subjectRef} />
          </div>
          <div className="form__group mt-1">
            <label htmlFor="message">Message</label>
            <textarea name="message" ref={messageRef}></textarea>
          </div>
          <div>
            <button className="form__btn" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
