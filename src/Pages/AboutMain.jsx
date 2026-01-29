import React from 'react';
import about_usimg from '../assets/aboutus.jpg';
import about_us from '../assets/about_us_icon1.png';
import about_us_2 from '../assets/about_us_icon2.png';
import about_us_3 from '../assets/about_us_icon3.png';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const AboutMain = () => {
    return (
        <div className="container py-5 px-0 mt-5 mb-5">
      {/* Image + Text Section */}
      <div className="row g-0 align-items-stretch">
        <div className="col-md-6">
          <img
            src={about_usimg}
            alt="About Us"
             onContextMenu={(e) => e.preventDefault()}
            className="img-fluid w-100 object-fit-cover"
            style={{ height: '500px' }}
          />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center px-4 py-5" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="w-100">
            <div className="card border-0 bg-transparent">
              <div className="card-body px-0">
                <p className="fs-4 fw-bold text-start mb-1 text-muted">About Us</p>
                <h2 className="fs-2 fw-bolder text-start mb-4">
                  Designing Spaces, Creating <span style={{ color: '#AE5E08' }}>Experiences</span>
                </h2>
                <p className="text-dark">
                At Dot Interiors and Traders has become one of the most trusted and innovative names in interior design. Driven by a passion for creativity and a commitment to quality, we specialize in transforming empty spaces into warm, inviting, and functional environments that truly feel like home.                  </p><p>
                With our expertise in Interiors in Coimbatore, we deliver tailor-made solutions that balance style, comfort, and practicality. From modern apartments to luxurious villas, every project we undertake is a unique reflection of our clients' personalities and dreams.
                </p>
                <Link
                  className="btn bg-dark text-light border-0 rounded-pill px-4 py-2 mt-4"
                  to="/about-us"
                >
                  More Details <span className="ms-2"><GoArrowUpRight /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section - Boxed Layout */}
      <div className="row mt-5">
        <div className="col-12">
          <div className=" p-4 rounded">
            <h2 className="fs-2 fw-bolder text-start mb-4 text-with-color">Our Unique Approach to Interior Design</h2>
            <p className="text-muted mb-4">
              At Dot Interiors and Traders, we follow a structured and client-focused process:
            </p>
            
            <div className="row g-4">
              {[{
                icon: "ri-discuss-line",
                title: "Consultation and Conceptualization",
                desc: "Understanding your style, needs, and budget."
              }, {
                icon: "ri-pencil-ruler-2-line",
                title: "Design and Planning",
                desc: "Creating 3D visualizations and space plans to help you envision the final outcome."
              }, {
                icon: "ri-shopping-cart-line",
                title: "Material Selection and Execution",
                desc: "Using premium-quality materials and ensuring flawless execution."
              }, {
                icon: "ri-hammer-line",
                title: "Final Styling and Handover",
                desc: "Adding finishing touches to create a beautiful, move-in-ready space."
              }].map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="bg-white p-3 rounded shadow-sm h-100">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <div
                          className="rounded-circle d-flex justify-content-center align-items-center"
                          style={{ width: '50px', height: '50px', backgroundColor: '#EDEDED' }}
                        >
                          <i className={`${item.icon} text-with-color`} style={{ fontSize: '1.5rem' }}></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="fw-bold text-dark mb-2">{item.title}</h6>
                        <p className="text-muted small mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Section - Boxed Layout */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="bg-white p-4 rounded">
            <h2 className="fs-2 fw-bolder text-start mb-4 text-with-color">Transforming Every Corner with Passion</h2>
            <p className="text-muted mb-4">
              As Affordable Interior Designers in Coimbatore, we believe great design should be accessible to everyone. Our solutions cater to all budgets without compromising on quality or creativity.
            </p>
            
            <div className="row g-4">
              {[{
                icon: "ri-palette-line",
                title: "Personalized Designs",
                desc: "Every project is a reflection of the client's personality and lifestyle."
              }, {
                icon: "ri-time-line",
                title: "Timely Delivery",
                desc: "We value your time and ensure on-time project completion."
              }, {
                icon: "ri-tools-line",
                title: "End-to-End Solutions",
                desc: "From design to execution, we handle it all seamlessly."
              }, {
                icon: "ri-price-tag-3-line",
                title: "Transparent Pricing",
                desc: "No hidden costs, clear estimates, and honest communication."
              }].map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="bg-white p-3 rounded shadow-sm h-100">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <div
                          className="rounded-circle d-flex justify-content-center align-items-center"
                          style={{ width: '50px', height: '50px', backgroundColor: '#EDEDED' }}
                        >
                          <i className={`${item.icon} text-with-color`} style={{ fontSize: '1.5rem' }}></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="fw-bold text-dark mb-2">{item.title}</h6>
                        <p className="text-muted small mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default AboutMain;
