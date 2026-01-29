
// import React, { useState } from 'react';

const Contact_details = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch('/contact.php', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   })
  //   .then((res) => res.text())
  //   .then((res) => alert(res))
  //   .catch((err) => console.error(err));
  // };
  return (
    <div>
      <div className="container-fluid contact-box px-5 text-white mt-5 mb-5">


        <div className="row map-form-wrapper py-5">
          <div className="col-md-6 mb-4 mb-md-0 ">
            <h6 className='text-dark fw-bold'>View on google map</h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.2756248004744!2d76.9549024748376!3d11.01753988914825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f71138d49b%3A0x5e8b4e5c6a8e2cf4!2sGandhipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718000000000"
              style={{ width: '100%', height: '300px', border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gandhipuram Map"
            ></iframe>
          </div>

          <div className="col-md-6  px-1">
            <form
              className="py-4"
              action="/send-email.php"
              method="POST"
            >

              <div className="row g-3 mb-4">
                <div className="col-md-6 mb-1">
                  <input
                    type="text"
                    name="name"
                    className="form-control no-focus"
                    placeholder="Name"
                    required
                    style={{ border: '1px solid grey', color: 'black', backgroundColor: 'white' }}
                  />






                  
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="text"
                    name="phonenumber"
                    className="form-control no-focus"
                    placeholder="Phone No"
                    required
                    style={{ border: '1px solid grey' }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-control no-focus"
                  placeholder="Email"
                  required
                  style={{ border: '1px solid grey' }}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control no-focus"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                  style={{ border: '1px solid grey' }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-submit border-0 d-flex bg-dark
      w-50 w-sm-50 w-md-50 text-white justify-content-center
      align-items-center rounded-pill"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Contact_details
