import React from 'react'
import home_img from '../assets/home.jpg'
import headerimg from '../assets/headerimg.jpg'


import { FaFacebookF } from "react-icons/fa6";

import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

// import home_bg from '../assets/home-bg.jpg'
const Hero = () => {
  return (
   <section className="position-relative min-vh-100 d-flex align-items-center text-white">
  <div
    className="position-absolute top-0 start-0 w-100 h-100 bg-center"
    style={{
      backgroundImage: `url(${home_img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity:'100%'
    }}
    onContextMenu={(e) => e.preventDefault()}
  >
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>
  </div>

  <div className="position-relative container px-3 z-1">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h1 className="display-4 fw-bold mb-4">
          Best Interior designer in <span style={{color:'#CE8B14ff'}}>Coimbatore</span>
        </h1>
        <h2 className="h3 fw-semibold mb-4">Get Premium Interior Design</h2>
        <p className="lead text-light mb-4">
        Your home is more than just a place to live — it’s an expression of who you are. At Dot Interiors and Traders, we are proud to be known as the Best Interior Designers in Coimbatore
        </p>
        <a href="https://wa.me/919629099970" target="_blank" 
        className="btn btn-lg fs-6 fw-medium px-3 py-2 quote-btn ">
          Get a Free Quote
        </a>
      </div>

      <div className="col-lg-6 d-none d-lg-block">
        <div className="position-relative">
          <img
            src={headerimg}
            alt="Interior Design"
             onContextMenu={(e) => e.preventDefault()}
            className="img-fluid rounded shadow-lg"
            style={{ height: '550px', objectFit: 'cover', width: '100%' }}
          />
        </div>
      </div>
    </div>
  </div>
 <div className="floating-icons">
        <a href="https://x.com/dotinteriorscbe" target="_blank" className="icon twitter"
         title="twitter">
    <FaXTwitter />
        </a>
        <a href="tel:+919629099970" target="_blank" className="icon call"
         title="call">
   <FaPhoneAlt />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61573154057533"
         className="icon facebook" title="facebook">
        <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/dot_interiors_and_traders" className="icon instagram fs-6" 
        title="instagram">
  <PiInstagramLogoFill size={25}/>
        </a>
       
      </div>
</section>
  )
}


 export default Hero
