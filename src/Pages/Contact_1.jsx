import React from 'react'
import contactus_img_1 from '../assets/Contactus_img_1_.jpg'
import contactus_img_2 from '../assets/Contactus_img_2_.jpg'
import Contacticon from '../assets/contactus.png'

const Contact_1 = () => {
  return (
    <div>
      <div className="container py-5">
  <div className="row g-0 align-items-center">
    <div className="col-lg-6 left-section mt-5">
      <div className="grid-icon">
        <img src={Contacticon} style={{width: '35px',height: '35px'}} alt=""/>
      </div>
      <img src={contactus_img_1} alt="Main" className="small-image"/>
      <img src={contactus_img_2}alt="Small" className="main-image"/>
    </div>

   
    <div className="col-lg-5">
      <h4 className="fw-bold">Have a project to discuss with?</h4>
      <p className="mb-4 text-with-color" >Don’t hesitate to reach us!</p>

      <div className="form-section border overflow-hidden">
        <form className="py-4"
              action="/send-email.php"
              method="POST">
          <div className="mb-3 mt-2">
            <input type="text" name='name' className="form-control no-focus" placeholder="Name" required />
          </div>
          <div className="mb-3 mt-2">
            <input type="email" name='email' className="form-control no-focus" placeholder="Email" required />
          </div>
          <div className="mb-3 mt-2">
            <input type="tel" name='phonenumber' className="form-control no-focus" placeholder="Phone No" required />
          </div>
          <div className="mb-4 mt-2">
            <textarea className="form-control no-focus" name='message' rows="4" placeholder="Subject..." required></textarea>
          </div>
            <button type="submit" className="submit-btn">Submit</button>
          
        </form>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default Contact_1
