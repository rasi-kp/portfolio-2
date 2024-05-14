import React from "react";
import "./Certificate.css";

const Projects = () => {
  function more() {
    window.open('https://drive.google.com/drive/u/0/folders/1mhJ1R-VeqH2YjN_qPH3S86Ks9X48skf6', '_blank');
  }
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      {/* <div class="container"> */}
        <h4 class="py-3 ">
          My <span>Certifications</span>
        </h4>
      {/* </div> */}
      <div className="container my-1">
        <div class="row">
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <img
              src="../src/assets/c1.jpg"
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <img
              src="../src/assets/c2.jpg"
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <img
              src="../src/assets/c3.jpg"
              alt="Project 1"
              className="img-fluid shadow rounded "
            />
          </div>
        </div>
        <button onClick={more} className="button ">
          More Certificate
        </button>
      </div>
    </div>
  );
};

export default Projects;
