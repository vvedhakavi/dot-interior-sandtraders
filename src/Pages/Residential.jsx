import React from 'react'
import Residential_img from '../assets/project-Residential.jpg'

const Residential = () => {
  return (
    <div className="Residential pb-5">
      <div className="Residential-head text-center">
        <h1 className=' mt-3'>Projects</h1>
        <h2 className='mt-3 mb-4 text-with-color'>Residential Interior Design Services</h2>
      </div>
      <div className="Residential-img d-flex justify-content-center px-2 px-md-5">
        <img src={Residential_img} onContextMenu={(e) => e.preventDefault()} className="w-100 img-fluid" alt="" />
      </div>
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">

            <div className="card w-100 " style={{ Border: '1px solid #DDDADA' }}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Home Interior Design</h3>
                <p className="card-text text-start">
                  We create personalized spaces that reflect your style, from contemporary to classNameic themes
                </p>
              </div>
              <ul className=" list-group-flush">
                <li className=" border-0">Customized home interiors</li>
                <li className="  border-0 text-sm-truncate">
                  Affordable home interior design packages
                </li>
                <li className="border-0">Premium materials and Finishes</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">

            <div className="card w-100" style={{ Border: '1px solid #DDDADA' }}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center">Flat Interior Design</h3>
                <p className="card-text text-start">
                  Maximize space and elegance with our Flat Interior Design solutions, perfect for apartments and compact homes.
                </p>
              </div>
              <ul className=" list-group-flush">
                <li className=" border-0">Space saving designs</li>
                <li className="border-0 text-truncate" style={{ maxWidth: '100%;' }}>
                  Modern and functional layouts
                </li>
                <li className=" border-0 text-sm-truncate">Stylish & practical storage solutions</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">

            <div className="card w-100" style={{ Border: '1px solid #DDDADA;' }}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Modular Kitchen Design</h3>
                <p className="card-text text-start">

                  Upgrade your cooking space with sleek, efficient Modular Kitchen Designs by expert Modular Kitchen Designers

                </p>
              </div>
              <ul className=" list-group-flush ">
                <li className="  border-0">Customized home interiors</li>
                <li className="  border-0 text-sm-truncate" >
                  Affordable home interior design packages
                </li>
                <li className=" border-0">Premium materials and Finishes</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">

            <div className="card w-100" style={{ Border: '1px solid #DDDADA' }}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Bedroom&Living-Dining Interiors</h3>
                <p className="card-text text-start">

                  Upgrade your cooking space with sleek, efficient Modular Kitchen Designs by expert Modular Kitchen Designers

                </p>
              </div>
              <ul className=" list-group-flush ">
                <li className=" border-0 text-sm-truncate" >Bedroom Interiors: Serene, stylish, and clutter
                  -free designs for relaxation.</li>
                <li className=" border-0 text-sm-truncate">
                  Living & Dining Interiors: Elegant spaces
                  perfect for family gatherings and
                  entertainment.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">

            <div className="card w-100 " style={{ Border: '1px solid #DDDADA' }}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Luxury Interior Design </h3>
                <p className="card-text text-start">

                  Indulge in opulent Luxury Interior Design with
                  high-end finishes, bespoke furniture, and
                  sophisticated decor.


                </p>
              </div>
              <ul className="list-group-flush ">
                <li className=" border-0 text-start">Bedroom Interiors: Serene, stylish, and clutter <br />

                  -free designs for relaxation.</li>
                <li className=" border-0 text-sm-truncate" style={{ maxWidth: '100%;' }}>
                  Living & Dining Interiors: Elegant spaces
                  perfect <br /> for family gatherings and
                  entertainment.
                </li>
              </ul>
            </div>
          </div>
  <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">

            <div className="card w-100 " style={{ Border: '1px solid #DDDADA' }}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Home Office & Study Room Design
</h3>
                <p className="card-text text-start">

                Create a productive sanctuary at home with interiors 
                tailored for focus, comfort, and style.
                 Whether it’s a compact study nook or 
                 a full-scale home office, our designs balance aesthetics with functionality.


                </p>
              </div>
              <ul className="list-group-flush ">
                <li className=" border-0 text-start">Ergonomic & space-smart furniture
 

                </li>
                <li className=" border-0 text-sm-truncate" style={{ maxWidth: '100%;' }}>
                 Soundproofing & lighting for concentration


                </li>
                 <li className=" border-0 text-sm-truncate" style={{ maxWidth: '100%;' }}>
                   Personalized themes to inspire creativity

                </li>
              
              </ul>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Residential
