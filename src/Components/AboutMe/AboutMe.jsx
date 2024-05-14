import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  function openlinkdin() {
    window.open('https://www.linkedin.com/in/muhammad-rasi-k-p-820498240/', '_blank');
  }
  return (
    <div className="container-fluid text-center my-5 py-5" id="about">
      <h3 className="pt-3 ">
        About <span>Me</span>!
      </h3>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <img
              src="../src/assets/rasi full.jpg"
              alt="sisindri singamsetti"
              className="img-fluid shadow"
            />
          </div>
          <div className="col-12 col-lg-7 mx-3 pl-5 aboutRight">
            <h4 className="mt-5">Muhammad Rasi K P</h4>
            <h6 className="mt-4 mb-5">
              <i>
                Full Stack <span>Developer</span>!
              </i>
            </h6>
            <p className="py-2">
            Hello! I'm Muhammad Rasi K P, a passionate Front-End Developer on a 
            journey to becoming a Full-Stack Developer. With a strong foundation in HTML, 
            CSS, Bootstrap, JavaScript, and React.
            </p>
            <p className="py-2">
            If you're seeking a motivated and eager developer to bring fresh ideas and 
            robust solutions to your team, let's connect. I'm excited about the prospect 
            of working together and making a meaningful impact in the world of web development.
            </p>
            <button onClick={openlinkdin} className="button mt-3 mb-4">
              Read More...😉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
