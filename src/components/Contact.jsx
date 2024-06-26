import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_uyfdrbn", "template_zi5su1j", form.current, {
        publicKey: "5rd1T0v1UEuBYJhJl",
      })
      .then(
        () => {
          console.log("success");
        },
        (error) => {
          console.log("error", error.text);
        }
      );
  };
  return (
    <>
      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Request a call back</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form
                id="request"
                ref={form}
                className="main_form"
                onSubmit={sendEmail}
              >
                <div className="row">
                  <div className="col-md-12 ">
                    <input
                      className="contactus"
                      placeholder="Full Name"
                      type="text"
                      name="user_name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email "
                      type="text"
                      name="user_email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="text"
                      name="phone_number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Message"
                      type="text"
                      name="message"
                    />
                  </div>
                  <div className="col-md-12">
                    <input type="submit" className="send_btn" value="Send" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
