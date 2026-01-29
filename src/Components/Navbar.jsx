import React, { useEffect, useState, useRef } from 'react'
import { FaBars } from "react-icons/fa";
import logo from '../assets/logo1.svg'
import { NavLink, useLocation } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import titlelogo from '../assets/titlelogo.png'

const Navbar = () => {
  const location = useLocation();
  // Define which paths should activate each parent
  const serviceBasePaths = ['/renovation', '/joint-venture', '/interior-design'];
  const serviceActive = serviceBasePaths.some(path => location.pathname.startsWith(path));
  const projectsBasePaths = ['/commercial', '/residential', '/projects'];
  const projectsActive = projectsBasePaths.some(path => location.pathname.startsWith(path));

  // Shadow on scroll
  const [showShadow, setShowShadow] = useState(false);
  // Mobile detection
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  // Dropdown open state
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  // Navbar collapse state
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns on route change (for mobile)
  useEffect(() => {
    setServiceDropdownOpen(false);
    setProjectsDropdownOpen(false);
    // Collapse navbar on route change (for mobile)
    if (isMobile && navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove('show');
    }
  }, [location.pathname, isMobile]);

  // Helper to handle submenu click
  const handleSubmenuClick = () => {
    if (isMobile) {
      setServiceDropdownOpen(false);
      setProjectsDropdownOpen(false);
      if (navbarCollapseRef.current) {
        navbarCollapseRef.current.classList.remove('show');
      }
    }
  };

  return (
    <div className='p-0'>
      <nav className={`navbar navbar-expand-lg fixed-top bg-light ${showShadow ? 'shadow' : ''}`}>
        <div className="container-fluid justify-content-between">
          <NavLink to="/">
            <picture>
              <source className="navbar-brand" media="(min-width:400px )" srcSet={logo} /> <img media="(min-width:320px)" src={titlelogo} alt="" />
            </picture>
          </NavLink>

          <button className="navbar-toggler ms-auto outline-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText" ref={navbarCollapseRef}>
            <ul className="navbar-nav m-auto d-flex gap-4 mb-lg-0 d-flex align-items-center">
              <li className="nav-item ">
                <NavLink style={{ textTransform: 'capitalize' }}
                  className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link text-dark"}
                  aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{ textTransform: 'capitalize' }}
                  className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link text-dark"}
                  to="/about-us">About Us</NavLink>
              </li>
              <li className="nav-item">
                <div className="btn-group border-0">
                  <button
                    style={{ textTransform: 'capitalize' }}
                    className={`btn fs-6 bg-transparent btn-sm dropdown-toggle no-caret
                       border-0 shadow-none text-dark ${serviceActive ? 'active-link' : ''}`}
                    type="button"
                    data-bs-toggle={isMobile ? undefined : "dropdown"}
                    aria-expanded={isMobile ? serviceDropdownOpen : undefined}
                    onClick={isMobile ? () => setServiceDropdownOpen((open) => !open) : undefined}
                  >
                    Service
                  </button>
                  <ul className={`dropdown-menu${isMobile ? ' w-100' : ''}${serviceDropdownOpen && isMobile ? ' show' : ''}`}
                    style={isMobile ? { position: 'static', float: 'none', marginTop: '0.5rem', border: '1px solid #dee2e6', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' } : {}}>
                    <li><NavLink style={{ textTransform: 'capitalize', fontSize: 'small' }} onClick={handleSubmenuClick} className={({ isActive }) => isActive ? "dropdown-item active-link rounded-2" : "dropdown-item rounded-2"} to="/interior-design">Interior Design</NavLink></li>
                    <li><NavLink style={{ textTransform: 'capitalize', fontSize: 'small' }} onClick={handleSubmenuClick} className={({ isActive }) => isActive ? "dropdown-item active-link rounded-2" : "dropdown-item rounded-2"} to="/renovation">Renovation</NavLink></li>
                    <li><NavLink style={{ textTransform: 'capitalize', fontSize: 'small' }} onClick={handleSubmenuClick} className={({ isActive }) => isActive ? "dropdown-item active-link rounded-2" : "dropdown-item rounded-2"} to="/joint-venture">JV Projects</NavLink></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="btn-group border-0">
                  <button
                    style={{ textTransform: 'capitalize' }}
                    className={`btn fs-6 bg-transparent btn-sm dropdown-toggle no-caret border-0 shadow-none text-dark ${projectsActive ? 'active-link' : ''}`}
                    type="button"
                    data-bs-toggle={isMobile ? undefined : "dropdown"}
                    aria-expanded={isMobile ? projectsDropdownOpen : undefined}
                    onClick={isMobile ? () => setProjectsDropdownOpen((open) => !open) : undefined}
                  >
                    Projects
                  </button>
                  <ul className={`dropdown-menu${isMobile ? 
                  ' w-100' : ''}${projectsDropdownOpen && isMobile ? ' show' : ''}`}
                    style={isMobile ? { position: 'static', float: 'none', marginTop: '0.5rem', 
                    border: '1px solid #dee2e6', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' } : {}}>
                    <li><NavLink style={{ textTransform: 'capitalize', fontSize: 'small' }} 
                    onClick={handleSubmenuClick} className={({ isActive }) => isActive ? "dropdown-item active-link rounded-2" : "dropdown-item rounded-2"} to="/commercial">
                      Commercial</NavLink></li>
                    <li><NavLink style={{ textTransform: 'capitalize', fontSize: 'small' }}
                     onClick={handleSubmenuClick} className={({ isActive }) => isActive ? 
                     "dropdown-item active-link rounded-2" : "dropdown-item rounded-2"} to="/residential">Residential</NavLink></li>
                      <li><NavLink style={{ textTransform: 'capitalize', fontSize: 'small' }}
                     onClick={handleSubmenuClick} className={({ isActive }) => isActive ? 
                     "dropdown-item active-link rounded-2" : "dropdown-item rounded-2"} to="/our-clients">Our Clients</NavLink></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <NavLink style={{ textTransform: 'capitalize' }} className={({ isActive }) => isActive ?
                 "nav-link active-link" : "nav-link text-dark"} to="/gallery">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{ textTransform: 'capitalize' }} className={({ isActive }) => isActive ?
                 "nav-link active-link" : "nav-link text-dark"} to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>

          </div>
      
        </div>
      </nav>
    </div>
  )
}

export default Navbar
