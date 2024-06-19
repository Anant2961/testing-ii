import React from "react";

const Loading = () => {
  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };
  return (
    <>
      <div className="loader_bg">
        <div className="loader">
          <img src="default_images/loading.gif" alt="#" />
        </div>
      </div>
      <div id="myNav" className="menu_sid">
        <a
          role="button"
          className="closebtn"
          onClick={() => {
            closeNav();
          }}
          style={{ cursor: "pointer" }}
        >
          &times;
        </a>
        <div className="menu_sid-content">
          <a href="#protien">Our Protien</a>
          <a href="#about">About Us</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Loading;
