import React from 'react'



import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    
    <footer className="bg-dark text-light pt-4 pb-2">
  <div className="container">
    <div className="row">

      {/* Address Section */}
      <div className=" col-12 col-sm-6 col-lg-3">
        <h5>Address</h5>
        <p className="txt-gray">
          20-25, Shop No. 6, First Floor,<br />
          Thiru Sri Jayam Plaza (TSJ),<br />
          Dr. Radhakrishna Street,<br />
          Gandhipuram, Coimbatore,<br />
          Tamil Nadu 641012
        </p>
        <p><strong>GST:</strong> <span className="txt-gray">33DSAPG1472E1ZF</span></p>
        <p><strong>Follow us on:</strong></p>
        <div className="d-flex gap-3 mb-2">
          <a href="https://x.com/dotinteriorscbe"><FaXTwitter color="white" size={25} /></a>
          <a href="https://www.facebook.com/profile.php?id=61573154057533"><FiFacebook color="white" size={25} /></a>
          <a href="https://www.instagram.com/dot_interiors_and_traders"><BsInstagram color="white" size={25} /></a>
        </div>
      </div>

      {/* Quick Links Section */}
      
          {/* Column 1 */}
          <div className="col-12 col-lg-3 col-sm-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="txt-gray text-decoration-none">Home</Link></li>
              <li><Link to="/about-us" className="txt-gray text-decoration-none">About Us</Link></li>
              <li><Link to="/services" className="txt-gray text-decoration-none">Services</Link></li>
              <li><Link to="/projects" className="txt-gray text-decoration-none">Projects</Link></li>
              <li><Link to="/gallery" className="txt-gray text-decoration-none">Gallery</Link></li>
              <li><Link to="/contact-us" className="txt-gray text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className=" col-12 col-lg-3 col-sm-6 mb-4 quicklinks">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/sitemap" className="txt-gray text-decoration-none">Sitemap</Link></li>
              <li><Link to="/interior-design" className="txt-gray text-decoration-none">Interior Design</Link></li>
              <li><Link to="/renovation" className="txt-gray text-decoration-none">Renovation</Link></li>
              <li><Link to="/joint-venture" className="txt-gray text-decoration-none">Joint Venture</Link></li>
              <li><Link to="/residential" className="txt-gray text-decoration-none">Residential Projects</Link></li>
              <li><Link to="/commercial" className="txt-gray text-decoration-none">Commercial Projects</Link></li>
            </ul>
          </div>
      

      {/* Contact Section */}
      <div className="col-12 col-lg-3 col-sm-6 mb-4">
        <h5>Contact</h5>
        <p>Phone:<br />
          <a href="tel:+919629099970" className="txt-gray text-decoration-none d-block">+91 96290 99970</a>
          <a href="tel:+919487622855" className="txt-gray text-decoration-none d-block">+91 94876 22855</a>
          <a href="tel:+919629099970" className="txt-gray text-decoration-none d-block">+91 4224513286</a>
        </p>
        <p>Email:<br />
          <a href="mailto:info@dotinteriorsandtraders.com" className="txt-gray text-decoration-none 
          d-inline-block px-0">
          info@dotinteriorsandtraders.com
          </a>
        </p>
        <p><strong>Hours:</strong><br />Mon - Sat: 9.00am – 6.00pm</p>
      </div>

    </div>

    {/* Footer Bottom */}
    <div className="text-center mt-4 border-top pt-3 small d-flex flex-column flex-md-row justify-content-between gap-2">
      <div>
        Designed by <a href="https://ekakshatechnologies.com/" className="text-decoration-none txt-gray">Ekaksha Technologies</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Dot Interiors and Traders. All rights reserved.
      </div>
    </div>
  </div>
</footer>

   

  )
}

export default Footer
