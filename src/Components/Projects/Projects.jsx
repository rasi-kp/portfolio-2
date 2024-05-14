import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      <h3 className="py-5 ">
        My <span>Projects</span>
      </h3>
      <div className="container my-1">
        <div class="row">
          <div class="col-12 col-md-4 px-4 py-4 projImg">
          <span>RHMS-</span> Hospital <span>Management System</span>
            <img
              src="../src/assets/rhms.png"
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
          <span>Ras Shopping-</span> e-commerce <span>Website</span>
            <img
              src="../src/assets/ecommerce.png"
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
          <span className="px-2">Patient</span> Health <span className="px-2">Monitoring System</span>
            <img
              src="../src/assets/p3.png"
              alt="Project 1"
              className="img-fluid shadow rounded "
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
          <span>Controlling</span> Media <span>Player</span>
            <img
              src="../src/assets/p5.jpg"
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
          <span>Health</span> Monitoring <span>Using IoT</span>
            <img
              src="../src/assets/res1.png"
              alt="Project 1"
              className="img-fluid shadow rounded "
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
          <span>Ayisha</span> Quarters <span>Website</span>
            <img
              src="../src/assets/ayisha.png"
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
