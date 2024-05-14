import React from "react";
import "./Cover.css";
import img from '../../assets/rasi new-modified.png'

const Cover = () => {
  function openWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=919605942261&text=Hey%2C%20Rasi%20', '_blank');
  }
  function openResume() {
    window.open('https://drive.google.com/file/d/1Ty6nd4jruOcdXAXwcvXhZWDpAe4A89BE/view', '_blank');
  }
  return (
    <div className="container" id="home">
      <div className="row align-items-center my-5 py-md-0 py-5">
        <div className="col-lg-7 py-5 order-2 order-lg-1 px-4">
          <h4 className="font-weight-bold pt-3">Hello, Its me</h4>
          <h2 className="font-weight-bold">Rasi K P</h2>
          <h4 className="font-weight-bold mb-4 pb-2">
            I'm a <span>Full stack Developer</span>
          </h4>
          <p className="font-weight-normal">
            I'm a Developer. Insterested in Web Development and Freelancing work
          </p>

          <div className="social-media py-3">
            <a
              href="https://www.linkedin.com/in/muhammad-rasi-k-p-820498240/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/rasi-kp/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/rasi_k_p"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <button onClick={openWhatsApp}  className="button mx-0 mx-md-3">Say Hello</button>
          </div>
          <button onClick={openResume} className="button my-3">
            Download Resume🫠
          </button>
        </div>
        <div className="col-12 col-lg-4 offset-lg-1 text-center order-1 order-lg-2">
          <img
            src={img}
            alt="Rasi_kp"
            className="img-fluid border border-primary border-5 rounded-circle"
          />
        </div>

      </div>
    </div>
  );
};

export default Cover;
