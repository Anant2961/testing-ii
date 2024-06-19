import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Header = () => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const fadeImages = [
    "images_II/athelet_testorone.JPG",
    "images_II/pankaj_mohte.JPG",
    "images_II/another_advertisement.JPG",
    "images_II/cordyshila.JPG",
  ];
  return (
    <div>
      <div className="header">
        <div className="menu_sitbar">
          <ul className="menu">
            <li>
              <button type="button">
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    openNav();
                  }}
                  src="default_images/menu_icon.png"
                  alt="#"
                />
              </button>
            </li>
          </ul>
          <ul className="social_icon">
            <li>
              <a role="button">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a role="button">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a role="button">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="header_full_bg">
          <div className="header_top">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="images_II/pro_logo.jpeg"
                        style={{
                          width: "150px",
                          height: "auto",
                          mixBlendMode: "multiply",
                        }}
                        alt="#"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5">
                  <div className="banner_text">
                    <h1>
                      Nurture your body with <br />
                      Nature Finest Herbs
                    </h1>
                    <a className="get_btn" href="#about" role="button">
                      About Protien
                    </a>{" "}
                    <a className="get_btn" href="#contact" role="button">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="slide-container">
                    <Slide>
                      <div className="each-fade">
                        <img src={fadeImages[0]} alt="slide1" />
                      </div>
                      <div className="each-fade">
                        <img src={fadeImages[1]} alt="slide2" />
                      </div>
                      <div className="each-fade">
                        <img src={fadeImages[2]} alt="slide3" />
                      </div>
                      <div className="each-fade">
                        <img src={fadeImages[3]} alt="slide4" />
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
