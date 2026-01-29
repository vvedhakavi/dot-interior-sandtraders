import React from 'react'
import Commercial_img from '../assets/commercial.jpg'

const Commercial = () => {
  return (
        <div className="Residential pb-5">
          <div className="Residential-head text-center">
              <h1 className='mt-3'>Projects</h1>
              <h2 className='mt-3 mb-4 text-with-color'>Commercial Interior Design Services</h2>
          </div>
          <div className="Residential-img d-flex justify-content-center px-2 px-md-5">
              <img src={Commercial_img}
               onContextMenu={(e) => e.preventDefault()} className="w-100 img-fluid" alt=""/>
          </div>
          <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">
            
            <div className="card w-100 " style={{Border:'1px solid #DDDADA'}}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Office Interior</h3>
                <p className="card-text text-start">
Boost productivity with a professionally designed workspace. Our Office Interior Designers create:
                </p>
              </div>
              <ul className=" list-group-flush">
                <li className=" border-0">Functional & Aesthetic Workspaces</li>

                <li className="  border-0 text-sm-truncate">
                 Corporate & Startup-Friendly Designs
                </li>
                <li className="border-0">Brand-Aligned Themes</li>
              </ul>
            </div>
          </div>
      
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">
           
            <div className="card w-100" style={{Border:'1px solid #DDDADA'}}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Retail & Hospitality Interiors</h3>
    
                 <ul className=" list-group-flush">
                 <li className=" border-0 text-sm-truncate" style={{maxWidth: '100%;'}}>           
                     
     Showrooms, Cafés & Restaurants –
 Attractive layouts to enhance customer 
experience.</li>
                <li className=" border-0 text-sm-truncate" style={{maxWidth: '100%;'}}>Clinics & Salons – Professional yet welcoming 
interiors.</li>

               
              </ul>
              </div>
             
            </div>
          </div>
         <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">
           
            <div className="card w-100" style={{Border:'1px solid #DDDADA;'}}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Interior Decorators for Commercial Spaces</h3>
                <p className="card-text text-start">
      
      From furniture selection to lighting, our Interior Decorators enhance aesthetics while maintaining functionality.
      
                </p>
              </div>
             
            </div>
          </div>
           <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">
           
            <div className="card w-100" style={{Border:'1px solid #DDDADA;'}}>
              <div className="card-body">
                <h3 className="card-title text-with-color text-center mb-4">Co-Working & Flexible Office Spaces
</h3>
                <p className="card-text text-start">
      
      Smart, scalable interiors designed for shared work environments. We create layouts 
      that balance privacy and collaboration, optimized for maximum space utilization, easy adaptability,
       and a modern professional look perfect for co-working hubs, incubators, and flexible office setups.
                </p>
              </div>
             
            </div>
          </div>
         
         
          
        </div>
      </div>
      
          
        </div>
  )
}

export default Commercial
