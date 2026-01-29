import React from 'react'
import Renovation_img from '../assets/renovationupdate.png'

const Renovation = () => {
  return (
    <div>
         <div className="container-fluid p-3 pb-5">
        <h1 className=" fw-bold text-center text-with-color mb-4">
          Renovation
        </h1>
        <div className="row g-1 justify-content-evenly align-items-stretch">
          {/* Image Column */}
          <div className="col-md-6 d-flex">
            <img src={Renovation_img} onContextMenu={(e) => e.preventDefault()} className="img-fluid w-100" alt="Renovation work" />
          </div>

          {/* Content Column */}
          <div className="col-md-5 d-flex flex-column justify-content-center  bg-white">
            <div className="head-Renovation mb-3">
              <h1>
                Upgrade Your Space with Expert Renovation Works in Coimbatore
              </h1>
            </div>

            <div className="content-renovation mb-3">
              <p>
                We specialize in providing high-quality renovation services in Coimbatore that breathe new life into old spaces. Whether you’re looking to upgrade a single room or completely transform an entire property, our team of skilled designers and craftsmen is here to help. We handle every detail
                from planning and design to execution to ensure a smooth, stress-free renovation journey.
              </p>

              <h3 className="fw-bold">
                Your Preferred Renovation Contractor in Coimbatore
              </h3>

              <p>
                As an experienced renovation contractor in Coimbatore,
                we understand the importance of blending aesthetics with functionality.
                Our team works closely with you to understand your needs,
                style preferences, and budget to create a space that feels brand new yet truly yours.
              </p>

              <p className="fw-semibold">
                From modern upgrades to structural changes, we deliver customized solutions that exceed expectations. Our expertise covers:
              </p>
            </div>

            <div className="lists-renovation">
              <ul className="ps-3">
                <li>Complete home renovations</li>
                <li>Kitchen and bathroom remodeling</li>
                <li>Living and bedroom makeovers</li>
                <li>Office and commercial space renovations</li>
                <li>Building exterior and frontage enhancements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

     

      
    </div>
  )
}

export default Renovation
