import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sitemapData = {
    mainPages: [
      { title: "Home", path: "/", description: "Welcome to Dot Interiors and Traders" },
      { title: "About Us", path: "/about-us", description: "Learn about our company and approach" },
      { title: "Contact Us", path: "/contact-us", description: "Get in touch with us" }
    ],
    services: [
      { title: "Interior Design", path: "/interior-design", description: "Residential and commercial interior design services" },
      { title: "Renovation", path: "/renovation", description: "Complete renovation and remodeling services" },
      { title: "Joint Venture", path: "/joint-venture", description: "Collaborative project development solutions" }
    ],
    projects: [
      { title: "Residential Projects", path: "/residential", description: "View our residential interior design projects" },
      { title: "Commercial Projects", path: "/commercial", description: "Explore our commercial interior design projects" },
      { title: "Gallery", path: "/gallery", description: "Browse our project portfolio and designs" }
    ],
    additionalPages: [
      { title: "Services", path: "/services", description: "Overview of all our services" },
      { title: "Projects", path: "/projects", description: "Our project categories and portfolio" },
      { title: "Testimonials", path: "/testimonials", description: "Client testimonials and reviews" }
    ]
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center fw-bold mb-4">Sitemap</h1>
          <p className="text-center text-muted mb-5">
            Navigate through all pages of Dot Interiors and Traders website
          </p>
        </div>
      </div>

      {/* Main Pages */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Main Pages</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {sitemapData.mainPages.map((page, index) => (
                  <div className="col-md-4 mb-3" key={index}>
                    <div className="p-3 border rounded h-100">
                      <h5 className="text-with-color mb-2">
                        <Link to={page.path} className="text-decoration-none">
                          {page.title}
                        </Link>
                      </h5>
                      <p className="text-muted small mb-0">{page.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-success text-white">
              <h3 className="mb-0">Our Services</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {sitemapData.services.map((service, index) => (
                  <div className="col-md-4 mb-3" key={index}>
                    <div className="p-3 border rounded h-100">
                      <h5 className="text-with-color mb-2">
                        <Link to={service.path} className="text-decoration-none">
                          {service.title}
                        </Link>
                      </h5>
                      <p className="text-muted small mb-0">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-warning text-dark">
              <h3 className="mb-0">Our Projects</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {sitemapData.projects.map((project, index) => (
                  <div className="col-md-4 mb-3" key={index}>
                    <div className="p-3 border rounded h-100">
                      <h5 className="text-with-color mb-2">
                        <Link to={project.path} className="text-decoration-none">
                          {project.title}
                        </Link>
                      </h5>
                      <p className="text-muted small mb-0">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Pages */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-info text-white">
              <h3 className="mb-0">Additional Pages</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {sitemapData.additionalPages.map((page, index) => (
                  <div className="col-md-4 mb-3" key={index}>
                    <div className="p-3 border rounded h-100">
                      <h5 className="text-with-color mb-2">
                        <Link to={page.path} className="text-decoration-none">
                          {page.title}
                        </Link>
                      </h5>
                      <p className="text-muted small mb-0">{page.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-dark text-white">
              <h3 className="mb-0">Contact Information</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="text-with-color">Address</h5>
                  <p className="text-muted">
                    20-25, Shop No. 6, First Floor,<br />
                    Thiru Sri Jayam Plaza (TSJ),<br />
                    Dr. Radhakrishna Street,<br />
                    Gandhipuram, Coimbatore, Tamil Nadu 641012
                  </p>
                  <p><strong>GST:</strong> <span className="text-muted">33DSAPG1472E1ZF</span></p>
                </div>
                <div className="col-md-6">
                  <h5 className="text-with-color">Contact Details</h5>
                  <p className="text-muted">
                    <strong>Phone:</strong><br />
                    <a href="tel:+919629099970" className="text-decoration-none">+91 96290 99970</a><br />
                    <a href="tel:+919487622855" className="text-decoration-none">+91 94876 22855</a>
                  </p>
                  <p className="text-muted">
                    <strong>Email:</strong><br />
                    <a href="mailto:info@dotinteriorsandtraders.com" className="text-decoration-none">
                      info@dotinteriorsandtraders.com
                    </a>
                  </p>
                  <p className="text-muted">
                    <strong>Hours:</strong><br />
                    Mon - Sat: 9.00am – 6.00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap; 