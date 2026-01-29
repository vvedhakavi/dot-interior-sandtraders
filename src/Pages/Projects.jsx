// import React, { useState } from 'react'; // 


// import { Link } from 'react-router-dom';
// import { GoArrowUpRight } from 'react-icons/go';
// import Residential_img from '../assets/Project-residential.jpg'
// import Commercial_img from '../assets/comm.png'




// const ProjectCard = ({ title,footer_head, link, img }) => {
//  const [showNumber, setShowNumber] = useState(false);
//   const [imageValid, setImageValid] = useState(true);
//   const phoneNumber = '+1234567890';
//   const imageUrl = 'https://example.com/phone-icon.png';
//   const handleClick = () => {
//     setShowNumber(true);
//   };

  
// return(
//     <div className="bg-white rounded col-12 col-md-4 col-lg-4 shadow-md
//      p-2 border overflow-hidden transition shadow-sm hover-shadow-lg" style={{ cursor: 'pointer' }}>
//       <div className="position-relative">
//         <img
//           src={img}
//           alt={title}
//           onClick={handleClick}
//           className="w-100 img-fluid rounded"
//           style={{ height: '16rem', objectFit: 'cover' }} onError={() => setImageValid(false)}
//         />
//         <div className="position-absolute top-0 start-0 m-3">
//           <span className="badge bg-warning text-white px-3 py-2 rounded-pill">
//             {title}
//           </span>
//         </div>
//       </div>
//       <div className="p-4 d-flex align-items-center justify-content-between">
//         <h4 className="fw-bold text-dark">{footer_head}</h4>
//         <Link
//           to={link}
//           className="btn border border-1 px-3 py-1 d-inline-flex align-items-center
//            justify-content-between gap-2">
//           More Details <span className='ms-auto'><GoArrowUpRight className=''/></span>
//         </Link>
//       </div>
//     </div>

// );
// };

// const Projects = () => {
//   return (
//     <div className="container-fluid mt-5 pt-5 mb-5">
//       <h1 className="text-center fw-bold mb-5">Projects</h1>
//       <div className="row justify-content-evenly">
//         <ProjectCard
//           title="Get a quote"
//           footer_head="Commercial"
//           link="/commercial"
//           img={Commercial_img}
//         />
//         <ProjectCard
//           title="Get a quote"
//           footer_head="Residential"
//           link="/residential"
//           img={Residential_img}
//         />
//       </div>
//     </div>
// );
// };

// export default Projects;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import Residential_img from '../assets/Project-residential.jpg';
import Commercial_img from '../assets/comm.png';

const ProjectCard = ({ title, footer_head, link, img }) => {
  const [showNumber, setShowNumber] = useState(false);
  const [imageValid, setImageValid] = useState(true);

  const phoneNumber = '919629099970';

  const handleClick = () => {
    setShowNumber(true);
  };

  useEffect(() => {
    let timer;
    if (showNumber) {
      timer = setTimeout(() => {
        setShowNumber(false);
      }, 1000); // 15 seconds
    }
    return () => clearTimeout(timer);
  }, [showNumber]);

  return (
    <div className="bg-white rounded col-12 col-md-4 col-lg-4 shadow-md
     p-2 border overflow-hidden transition shadow-sm hover-shadow-lg"
     style={{ cursor: 'pointer' }}
    >
      <div className="position-relative">
        <img
          src={img}
          alt={title}
           onContextMenu={(e) => e.preventDefault()}
          onClick={handleClick}
          className="w-100 img-fluid rounded"
          style={{ height: '16rem', objectFit: 'cover' }}
          onError={() => setImageValid(false)}
        />
        <div className="position-absolute top-0 start-0 m-3">
          <span className="badge bg-warning text-white px-3 py-2 rounded-pill">
            {title}
          </span>
        </div>
        {showNumber && (
          <div className="position-absolute bottom-0 start-0 m-3 bg-white p-2 rounded shadow">
           <a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none', color: 'inherit' }}>
  <strong>{phoneNumber}</strong>
</a>
          </div>
          

        )}
      </div>
      <div className="p-4 d-flex align-items-center justify-content-between">
        <h4 className="fw-bold text-dark">{footer_head}</h4>
        <Link
          to={link}
          className="btn border border-1 px-3 py-1 d-inline-flex align-items-center
           justify-content-between gap-2"
        >
          More Details <span className="ms-auto"><GoArrowUpRight /></span>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container-fluid mt-5 pt-5 mb-5">
      <h1 className="text-center fw-bold mb-5">Projects</h1>
      <div className="row justify-content-evenly">
        <ProjectCard
          title="Get a quote"
          footer_head="Commercial"
          link="/commercial"
          img={Commercial_img}
        />
        <ProjectCard
          title="Get a quote"
          footer_head="Residential"
          link="/residential"
          img={Residential_img}
        />
      </div>
    </div>
  );
};

export default Projects;
