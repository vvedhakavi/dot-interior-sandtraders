import React from 'react';
import service_img_1 from '../assets/service.jpg';
import renovation from '../assets/renovationupdate.png'
import jointventure from '../assets/Jointventure.jpg'
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

// Reusable Card Component
const ServiceCard = ({ title, description, image, link }) => (

  <div className="col">
    <div className="card shadow-sm h-100 border-0">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: '225px', objectFit: 'cover' }}
        onContextMenu={(e) => e.preventDefault()}
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="fw-bold mb-2" style={{ color: '#AE5E08' }}>{title}</h5>
          <p className="card-text small text-muted">
            {description}
          </p>
        </div>
        <Link
          to={link}
          className="  d-flex align-items-center mt-2 ms-auto bg-dark p-2 rounded-5 text-white"
          aria-label={`More about ${title}`}
        >
          <GoArrowUpRight />
        </Link>
      </div>
    </div>
  </div>
);

// Main Services Component
const Services = () => {
  return (
    <div className="container-fluid px-3 px-md-4 ">
      <div className="text-center">
        <h1 className="fw-bold">Services</h1>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center p-5">
        <ServiceCard
          title="Interior Design"
          image={service_img_1}
          description="As one of the top interior designers in Coimbatore, Dot Interiors and Traders specializes in transforming residential and commercial spaces into stunning, functional environments. Whether you need a modern home interior, a luxury office design, or a custom modular kitchen, our expert team delivers excellence in every project."
          link="/interior-design"
        />
        <ServiceCard
          title="Renovation"
          image={renovation}
          description="We specialize in providing high-quality renovation services in Coimbatore that breathe new life into old spaces. From a single room to entire properties, our skilled designers and craftsmen handle everything from planning to execution for a stress-free experience."
          link="/renovation"
        />
        <ServiceCard
          title="Joint Venture"
          image={jointventure}
          description="We believe in the power of collaboration to create standout spaces. Our joint venture projects in Coimbatore bring together property owners, developers, and our design team to deliver exceptional results."
          link="joint-venture"
        />
      </div>
    </div>
  );
};

export default Services;
