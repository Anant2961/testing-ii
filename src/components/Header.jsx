import React from "react";

const Header = () => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };
  return (
    <div>
      <div className="header">
        <div className="menu_sitbar">
          <ul className="menu">
            <li>
              <button type="button">
                <img
                  style={{}}
                  onClick={() => openNav()}
                  src="images/menu_icon.png"
                  alt="#"
                />
              </button>
            </li>
          </ul>
          <ul className="social_icon">
            <li>
              <a href="javascript:void(0)">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
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
                  <img
                    className="bann_img"
                    src="images_II/cordyceps_word.JPG"
                    alt="#"
                    style={{
                      height: "100vh",
                      mixBlendMode: "normal",
                      filter: "contrast(1)",
                    }}
                  />
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
