import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import project_img from "../assets/whyus.png";
import { FaPhone } from "react-icons/fa6";


import Slider from "react-slick";

const Projects_contact = () => {
  
  return (
    <div>
      <div className="container px-4 py-5">
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-4 py-4">
          <div className="col-12 col-md-6 py-2 d-flex flex-column align-items-center justify-content-center">
            <hr
              className="hr-30 me-auto"
              style={{
                width: "30px",
                backgroundColor: "#AE5E08",
                height: "2px",
                border: "none",
              }}
            />
            <img
              src={project_img}
              style={{ width: "100%", height: "470px" }}
              onContextMenu={(e) => e.preventDefault()}
              alt=""
            />
            <hr
              className="hr-30 me-auto "
              style={{
                width: "30px",
                backgroundColor: "#AE5E08",
                height: "2px",
                border: "none",
              }}
            />
          </div>
          <div
            className="col-12 col-md-6 shadow-lg rounded-4 pt-5"
            style={{ height: "470px" }}
          >
            <div className="card bg-transparent border-0 p-4" style={{}}>
              <div className="card-body  ">
                {/* Intro Section */}
                <div className="row mb-4">
                  <h4 className="fw-semibold lh-1 text-grey mb-0">Why us ?</h4>
                  <h2 className="fw-semibold mb-4 text-body-emphasis">
                    Your Trusted{" "}
                    <span className="text-with-color">Interior Company</span> in
                    Coimbatore
                  </h2>
                  <p
                    className="text-body-secondary text-justify "
                    style={{ textJustify: "inter-word" }}
                  >
                    Looking for a reliable Interior Designer company in Tamil
                    Nadu? Dot Interiors and Traders is your reliable choice for
                    innovative and functional interiors. We aim to be your
                    long-term design partner, turning ideas into reality with
                    unmatched dedication.
                  </p>
                </div>
                <hr
                  className="hr-100 me-auto"
                  style={{
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#AE5E08",
                    border: "none",
                  }}
                />

                {/* Contact Section */}
                {/* <div className="row mb-4 card shadow-lg-3 border-0">

        <h4 className="fw-semibold mb-0 text-body-emphasis mt-3">Contact</h4>
        <p className="text-body-secondary mb-1">
          <strong style={{width:'160px',height:'100px',backgroundColor:'black'}}><FaPhone style={{color:'white',borderRadius:'50%'}}/></strong>
          <a href="tel:+919629099970" className="text-decoration-none cursor-pointer text-dark ms-2">+91 96290 99970</a>,
          <a href="tel:+919487622855" className="text-decoration-none cursor-pointer text-dark ms-2">94876 22855</a>
        </p>

       
      </div> */}

                <div
                  className="row ms-2 align-items-center gap-0"
                  style={{ height: "40px", borderRadius: "10%" }}
                >
                  <div
                    className="col-auto d-flex px-3 py-2 text-center align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#AE5E08",
                      borderRadius: "18%",
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <strong>
                      <FaPhone
                        className="d-flex"
                        style={{ color: "white", fontSize: "15px" }}
                      />
                    </strong>
                  </div>
                  <div className="col align-items-start">
                    <a
                      href="tel:919629099970"
                      className="text-decoration-none cursor-pointer text-dark fw-semibold"
                    >
                      +91 96290 99970
                    </a>
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

export default Projects_contact;
