import React from 'react'
import client_1 from "../assets/dot-interiors-and-traders-coimbatore-express-car-care.png"
import client_2 from "../assets/dot-interiors-and-traders-coimbatore-teak-home.png"
import client_3 from "../assets/dotinteriors-and-traders-coimbatore-apex-construction.png"
import client_4 from "../assets/dot-interiors-and-traders-coimbatore-precot.png"
import client_5 from "../assets/dotinteriors-and-traders-coimbatore-s4-construction.png"
import client_6 from "../assets/dot-interiors-and-traders-coimbatore-abirami-pumps.png"
import client_7 from "../assets/dot-interiors-and-traders-coimbatore-jay-tea.png"


const OurClients = () => {
  return (
    <div className="container pt-2  mb-5">
      <h1 className="text-center text-with-color fw-bold fs-3">Our Clients</h1>
      <div className="row py-4">
        <img className="col-md-2 img-fluid object-cover" src={client_1} alt="" onContextMenu={(e) => e.preventDefault()}
          
        />
        <img className="col-md-2 img-fluid object-cover" src={client_2} alt="" onContextMenu={(e) => e.preventDefault()}
          

        />
        <img className="col-md-2 img-fluid object-cover" src={client_3} alt=""
         onContextMenu={(e) => e.preventDefault()}

        />

        <img className="col-md-2 img-fluid object-cover" src={client_4}
         alt="" onContextMenu={(e) => e.preventDefault()}
        />
        <img className="col-md-2 img-fluid object-cover" src={client_5} 
        alt="" onContextMenu={(e) => e.preventDefault()}
        />
        <img className="col-md-2 img-fluid object-cover" src={client_6} 
        alt=""
          onContextMenu={(e) => e.preventDefault()} 
          
        />
        <img className="col-md-2 img-fluid object-cover" src={client_7}
         alt="" onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  )
}

export default OurClients