import React from 'react'
import InteriorDesign_img from '../assets/renovation_img.jpg'

const InteriorDesign = () => {
  return (
    <div>
      <div className="container-fluid p-3 pb-5">
        <h1 className="fw-bold text-center text-with-color mb-5">
          Interior Design
        </h1>
        <div className="row g-1 justify-content-evenly align-items-stretch">
          {/* Image Column */}
          <div className="col-md-6 d-flex">
            <img src={InteriorDesign_img} onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100" alt="Renovation work" />
          </div>

          {/* Content Column */}
          <div className="col-md-5 d-flex flex-column justify-content-center bg-white">
            <div className="head-Renovation">
              <h1>
                Residential Interior Design Excellence
              </h1>
            </div>

            <div className="content-renovation mb-2">
              <p>
                As one of the Top Interior Designers in Coimbatore, Dot Interiors and Traders specializes in transforming residential and commercial spaces into stunning, functional environments. Whether you need a modern home interior, a luxury office design, or a custom modular kitchen, our expert team delivers excellence in every project.
              </p>

              <h3 className="fw-bold">
                Complete Home Interior Solutions
              </h3>

              <p>
                Our Home Interior Designers specialize in crafting personalized living spaces that blend functionality with aesthetic appeal. We offer:
              </p>
              <div className="lists-renovation">
                 <h5 className="fw-bold">
                Specialized Room Designs
               
              </h5>
                <ul className="ps-3">
                  <li className="p-0">Custom Flat Interior Design for apartments and compact homes</li>
                  <li className="p-0">Modern Interior Design with clean lines and smart solutions</li>
                  <li className="p-0">Luxury Interior Design in Coimbatore, Tamil Nadu for discerning clients</li>
                  <li className="p-0">Modular Kitchen Design:Created by expert Modular Kitchen Designers</li>
                  <li className="p-0">Bedroom Interiors Serene retreats tailored to your lifestyle</li>
                  <li className="p-0">Living and Dining Interiors Spaces designed for comfort and entertainment</li>
                </ul>
              </div>

              
             
              <h5 className="fw-bold">
                
                Specialized Interior Works
              </h5>
             <div className="row">
    <div className="col-6 col-md-4">
      <ul className="p-3">
        <li>Wood work</li>
        <li>False Ceiling</li>
        <li>Glasswork</li>
        
        <li>Renovation work</li>
      </ul>
    </div>
    <div className="col-6 col-md-4">
      <ul className="p-3">
        <li>Aluminum Partition</li>
        <li>SS and fabrication</li>
        <li>Painting</li>
        <li>UPVC/PVC</li>
      </ul>
    </div>
    <div className="col-6 col-md-4">
      <ul className="p-3">
        <li>Water proofing</li>
        <li>Tile laying / epoxy</li>
        <li>Curtains / wallpaper</li>
      </ul>
    </div>
  </div>

            </div>


          </div>
        </div>
      </div>




    </div>
  )
}

export default InteriorDesign
