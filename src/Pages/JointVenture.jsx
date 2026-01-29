import React from 'react'
import jvimg from '../assets/joint-venture.jpg'

const JointVenture = () => {
  return (
    // <div>
    <div className="container-fluid px-3 py-5">
      <h1 className="fw-bold text-center text-with-color ">Joint Venture And Consulting</h1>
          <p className="fw-normal text-secondary text-center">Build Better Together with Joint Venture Projects</p>

      <div className="row g-4 justify-content-evenly align-items-stretch ">
        {/* Image Column */}
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-start">
          <img
            src={jvimg}
            className="img-fluid w-100"
            alt="Joint Venture"
            onContextMenu={(e) => e.preventDefault()}
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </div>

        {/* Text Column */}
        <div className="col-lg-5 col-md-12 d-flex">
          <div className="p-2 bg-white d-flex flex-column justify-content-center w-100">
            <p>
              We believe in the power of collaboration to create spaces that truly stand out. Our joint venture projects in Coimbatore are designed to bring together the strengths of property owners, developers, and our expert design team to deliver exceptional results.
            </p>

            <p>
              Whether you're a landowner looking to maximize your property's value or a builder searching for a creative partner, our joint venture solutions ensure a seamless, successful project from start to finish.
            </p>

            <h3 className="fw-bold mt-3">Your Dependable Joint Venture in Coimbatore
            </h3>
            <p>
              As an experienced interior design company and project partner, we specialize in planning, designing, and executing joint venture projects across Coimbatore and Tamil Nadu. Our collaborative approach allows us to combine your vision with our expertise in architecture, interiors, and execution, resulting in properties that are both functional and visually stunning.
            </p>

            <h5 className="fw-bold mt-3">How Our Joint Venture Services Work
            </h5>
            <p>
              We understand that every project and partnership is unique. That’s why our joint venture in Coimbatore service is fully customized to match your goals and expectations.
            </p>

            <h6 className="fw-bold mt-3">Our process includes:
            </h6>
            <ul className="ps-3">
              <li className='fw-bold'> Feasibility Analysis: <span className='no-bold'>Assessing the site, potential, and market value.</span> </li>
              <li className='fw-bold'>Design & Planning: <span className='no-bold'> Our team of expert architects and</span> top interior
                designers in Coimbatore <span className='no-bold'>craft a clear, detailed design vision.</span> </li>
              <li className='fw-bold'>Execution:<span className='no-bold'>We handle everything from approvals to construction and interior finishing.</span> </li>
              <li className='fw-bold'>Marketing & Handover:<span className='no-bold'> Support with marketing strategies and smooth handover to clients or buyers.</span></li> </ul>
          </div>
        </div>
      </div>
    </div>
    //  </div>
  )
}

export default JointVenture
