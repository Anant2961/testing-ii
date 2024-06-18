import React from "react";
import { useNavigate } from "react-router-dom";
// import product_description from './product_description.jsx';

const Protien = () => {
  // const navigate = useNavigate();
  // const handlebuttonclick = () => {
  // navigate("/");
  // };

  return (
    <div id="protien" className="protien_main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Our Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="protien">
              <figure>
                <img
                  src="images_II/cordytesto_shilajit_testorone.JPG"
                  style={{ mixBlendMode: "multiply", filter: "contrast(1)" }}
                  alt="#"
                />
              </figure>
              <h3>$400</h3>
              <span> Shilajit</span>
              <button className="read_more mar_top">Buy Now</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="protien">
              <figure>
                <img
                  src="images_II/cordyshala_shilajit.JPG"
                  style={{ mixBlendMode: "multiply", filter: "contrast(1)" }}
                  alt="#"
                />
              </figure>
              <h3>$400</h3>
              <span> Protein </span>
              <button className="read_more mar_top">Buy Now</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="protien">
              <figure>
                <img
                  src="images_II/cordytesto.JPG"
                  style={{ mixBlendMode: "multiply", filter: "contrast(1)" }}
                  alt="#"
                />
              </figure>
              <h3>$400</h3>
              <span> Legend Protein </span>
              <button className="read_more mar_top">Buy Now</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="protien">
              <figure>
                <img
                  src="images_II/f0f9a157-6625-44ad-b06b-8723ad2da7c1.JPG"
                  style={{ mixBlendMode: "multiply", filter: "contrast(1)" }}
                  alt="#"
                />
              </figure>
              <h3>$400</h3>
              <span> Ashwagandha </span>
              <button className="read_more mar_top">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protien;
