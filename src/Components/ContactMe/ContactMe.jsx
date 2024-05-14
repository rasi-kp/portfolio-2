import React, { useState } from "react";
import axios from 'axios';
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://script.google.com/macros/s/AKfycbzmWPCEmGEIspQ9rmxcSOulqAPuO0026tbnTyAu7WUv7krr4PWEWodH0kkaAmDVmfxVhQ/exec', formData);
      console.log(response);
      alert('Form submitted successfully');
      window.location.reload(); // or you can redirect to another page
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  };
  
  return (
    <div className="container my-5 py-5 text-center" id="contactme">
      <h3 className="mt-3 py-5">
        Contact <span>Me</span>!!
      </h3>
      <form id="submit-form" onSubmit={handleSubmit}>
      <div className="row g-3 align-items-center justify-content-center">
        <div className="col-5 col-lg-3">
          <input
            type="text"
            id="name"
            name="name"
            className="formControl"
            placeholder="First name"
            aria-label="First name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-5 col-lg-3">
          <input
            type="email"
            id="email"
            name="email"
            className="formControl"
            placeholder="Email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row g-3 align-items-center pt-3 justify-content-center">
        <div className="col-5 col-lg-3">
          <input
            type="text"
            id="subject"
            name="subject"
            className="formControl"
            placeholder="Subject"
            aria-label="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row g-3 pt-3 align-items-center justify-content-center">
        <div className="col-10 col-lg-6">
          <textarea
            id="message"
            name="message"
            className="formControl"
            placeholder="Message"
            aria-label="Message"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="button mt-5">
        Send Message🫣
      </button>
    </form>
    </div>
  );
};

export default ContactMe;
