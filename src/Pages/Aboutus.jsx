import React from 'react';

import about_usimg from '../assets/about.png';
import about_us from '../assets/about_us_icon1.png';
import about_us_2 from '../assets/about_us_icon2.png';
import about_us_3 from '../assets/about_us_icon3.png';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <div className="container mb-5">

    
        <div className="px-2 py-5
         align-items-center justify-content-center">
        <div className="row flex-lg-row align-items-center justify-content-center g-4 ">
            <div className="col-12 col-sm-8 col-lg-6">
                <img src={about_usimg} className="d-block w-100 mx-lg-auto img-fluid" 
                 onContextMenu={(e) => e.preventDefault()}
                 
                 alt=""/>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column align-items-start gap-0">
                <h4 className="fw-semibold text-grey lh-1 mb-0">
                   About Us
                </h4>
                 <h2 className="fw-bold text-start ">
                  Designing Spaces, Creating <span style={{ color: '#AE5E08' }}>Experiences</span>
                </h2>
                <p className="text-dark">
                Your home is more than just a place to live
                 — it’s an expression of who you are. At Dot Interiors
                  and Traders, we are proud to be known as the Best 
                  Interior Designers in Coimbatore, transforming homes
                   into personalized havens of comfort and style. Whether 
                   you are looking for Luxury Interior Designers in Coimbatore
                    or Budget Interior Designers in Coimbatore, our team has the
                     creativity and expertise to bring your vision to life.
                  </p><p>
                  As a leading Interior Design 
                  Company in Tamilnadu, we specialize
                   in designing elegant, functional, and customized 
                   interiors for every client. From luxurious villas
                    to modern apartments, our designs perfectly blend
                     aesthetics with practical living.
                </p>
                <div className="d-grid gap-0 mb-0
                d-md-flex justify-content-md-start">
                  <a href='./Dot Interiors and Traders Profile-1.pdf'target='_blank'
                   download="Dot_Interiors_Profile.pdf" className="btn bg-dark text-light border-0 rounded-pill 
                   btn-lg px-4 me-md-2">Download <span className=""  download ><GoArrowUpRight /></span></a> 
                </div>
            </div>
        </div>

    </div>
      {/* </div> */}

      {/* Info Cards Section */}
      {[{
        img: about_us,
        title: "Our Journey",
        desc: "From humble beginnings to becoming one of the most sought-after interior design companies, our journey has been driven by creativity, innovation, and an unwavering dedication to customer satisfaction. Over the years, we have successfully completed numerous residential and commercial projects, earning a reputation for excellence and reliability."
      }, {
        img: about_us_2,
        title: "Our Vision",
        desc: "To be the most preferred interior design and project partner in Coimbatore, known for our commitment to quality, creativity, and client satisfaction."
      }, {
        img: about_us_3,
        title: "Our Mission",
        desc: "To transform spaces into inspiring, functional, and beautiful environments that improve everyday living and add lasting value to our clients’ lives."
      }].map((item, index) => (
        <div className="row align-items-center px-3 px-sm-5 py-2 mt-4" key={index}>
          <div className="col-12 col-md-2 d-flex justify-content-center mb-3 mb-sm-0">
            <div
              className="border-0 rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: '120px', height: '120px', backgroundColor: '#EDEDED' }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid p-2 "
                style={{ width: '60px', height: '60px' }}
              />
            </div>
          </div>
          <div className="col-12 col-md-9 justify-content-center text-center text-md-start">
            <h5 className="card-title text-with-color pb-2 ">{item.title}</h5>
            <p className="card-text">{item.desc}</p>
          </div>
        </div>
      ))}
 </div>
  );
};

export default Aboutus;
