
import React, { useRef, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";

import testimonials_1_img from '../assets/testimonials_1.jpg'
import testimonials_2_img from '../assets/testimonials_2.jpg'
import testimonial_3_img from '../assets/testimonial_3.jpg'
import testimonial_4_img from '../assets/testimonial__4.jpg'








const Testimonial = [
  {
    text: `" House was a pleasure to work with. They understood our vision for a modern, minimalist home and presented creative and innovative design concepts. The kitchen design exceeded our expectations, and the color palette they chose was perfect. The team was professional and made the entire experience amazing. Especially the whole work will be done within our budget.
              I would highly recommend Dot Interiors and Traders to anyone"`,
    author: 'Balamurugan Ganesan',
    authorimg: testimonials_1_img
  },
  {
    text: `"  Very friendly and excellent work. I absolutely loved the work. I would definitely recommend
               Dot Interiors and Traders to anyone. They are very professional. The best part is that they
                clearly understood our requirements and budget and provided the best possible home."`,
    author: 'Arun K',
    authorimg: testimonials_2_img
  },
   {
    text: `"  Fantastic interior designs. We are very happy with their work. Such a beautiful
     design for budget home and office. Highly recommended for anyone looking for stylish yet affordable interiors. 
     Their team was professional,
     attentive, and delivered everything on time."`,
    author: 'Ramakrishnan',
    authorimg: testimonial_3_img
  },
   {
    text: `" Dot Interiors turned my normal living room into a beautiful,
     modern-looking living room. Their vision, creativity, and precision brought
      the space to life in ways I couldn't have imagined. Professional, 
    punctual, and full of fresh ideas — they truly exceeded expectations!"`,
    author: 'Prasanth',
    authorimg: testimonial_4_img
  },
];


const TestimonialCard = ({ text, author, authorimg }) => (
  <div className="card h-100 text-dark bg-transparent border border-light p-3"
    style={{ minWidth: '300px', flex: '1' }}>
    
    <p className="card-text text-dark clamp-3" style={{
      fontSize: '0.95rem', overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical'
    }}>{text}</p>
    <div className="d-flex align-items-center gap-2 ms-auto pt-3">
      {authorimg && (
        <img
          src={authorimg}
          alt={author}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          onContextMenu={(e) => e.preventDefault()}
        />
      )}
      <h6 className="ms-auto fw-bold text-dark">{author} -</h6>
    </div>
    </div>
    );
const Testimonials = () => {
  return (
    <div className="container py-5 ">
      <h2 className="text-dark mb-4">Testimonials</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">


        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 mb-4 d-flex justify-content-center align-items-stretch"
                style={{ maxWidth: '90%' }}>
                <TestimonialCard {...Testimonial[0]} />
              </div>
              <div className="col-12 col-md-6 mb-4 d-flex justify-content-center d-none d-md-flex align-items-stretch"
                style={{ maxWidth: '90%' }}>
                <TestimonialCard {...Testimonial[1]} />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 mb-4 d-flex justify-content-center" style={{ maxWidth: '90%' }}>
                <TestimonialCard {...Testimonial[2]} />
              </div>
              <div className="col-12 col-md-6 mb-4 d-flex justify-content-center d-none d-md-flex" style={{ maxWidth: '90%' }}>
                <TestimonialCard {...Testimonial[3]} />
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 mb-4 d-flex justify-content-center" style={{ maxWidth: '90%' }}>
                <TestimonialCard {...Testimonial[1]} />
              </div>
              <div className="col-12 col-md-6 mb-4 d-flex justify-content-center d-none d-md-flex" style={{ maxWidth: '90%' }}>
                <TestimonialCard {...Testimonial[0]} />
              </div>
            </div>
          </div> */}
          {/* <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 mb-4 d-flex justify-content-center" style={{ maxWidth: '90%' }}>
                <TestimonialCard {...Testimonial[1]} />
              </div>
              <div className="col-12 col-md-6 mb-4 d-flex justify-content-center d-none d-md-flex" style={{ maxWidth: '90%' }}>
                <TestimonialCard {...Testimonial[0]} />
              </div>
            </div>
          </div> */}
        </div>



        <button
          type="button"
          className="carousel-control-next d-none d-md-flex align-items-center justify-content-center"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
          aria-label="Next"
        >
          <span className="arrow">&rarr;</span>
          <span className="visually-hidden">Next</span>
        </button>


      </div>
      <div className="carousel-indicators d-md-none custom-indicators">
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0"
          className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testimonialCarousel"
          data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>


    </div>

    // <div className="container testimonial-section mb-5">
    //   <div className="testimonial-head mb-5 text-dark text-start">
    //     <h1 className='text-center fw-bold'>Testimonials</h1>
    //   </div>


    //   <div className="d-flex flex-column gap-3">
    //     <div className="row">

    //       <div className="col-md-6 mb-3">
    //         <div className="bg-transparent text-dark border rounded-4 p-4 h-100">
    //           <p className="testimonial-text clamp-text">
    //           House was a pleasure to work with. They understood our vision for a modern, minimalist home and presented creative and innovative design concepts. The kitchen design exceeded our expectations, and the color palette they chose was perfect. The team was professional and made the entire experience amazing. Especially the whole work will be done within our budget.
    //           I would highly recommend Dot Interiors and Traders to anyone
    //           </p>
    //           <div className="author-name fw-bold mt-5 g-4"> <img src={testimonials_1_img} alt=""
    //             style={{:'20px',height:'20px',borderRadius:'50%'}} />Balamurugan Ganesan</div>
    //         </div>
    //       </div>

    //       <div className="col-md-6 mb-3">
    //         <div className="bg-transparent text-dark border rounded-4 p-4 h-100">
    //           <p className="testimonial-text clamp-text">
    //             Very friendly and excellent work. I absolutely loved the work. I would definitely recommend
    //             Dot Interiors and Traders to anyone. They are very professional. The best part is that they
    //             clearly understood our requirements and budget and provided the best possible home.
    //           </p>
    //           <div className="author-name mt-5 fw-bold  g-2">
    //             <img src={testimonials_2_img} alt="" style={{:'20px',borderRadius:'50%'}} /> Arun K</div>
    //         </div>
    //       </div>
    //     </div>


    //   </div>
    // </div>
  );
};

    export default Testimonials;

