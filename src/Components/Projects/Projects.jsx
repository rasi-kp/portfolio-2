import React from "react";
import "./Projects.css";
import ayisha from '../../assets/ayisha.png'
import p3 from '../../assets/p3.png'
import p5 from '../../assets/p5.jpg'
import ecommerce from '../../assets/ecommerce.png'
import rhms from '../../assets/rhms.png'
import res1 from '../../assets/res1.png'

const Projects = () => {
  function more() {
    window.open('https://github.com/rasi-kp?tab=repositories', '_blank');
  }
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
              src={rhms}
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <span>Ras Shopping-</span> e-commerce <span>Website</span>
            <img
              src={ecommerce}
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <span className="px-2">Patient</span> Health <span className="px-2">Monitoring System</span>
            <img
              src={p3}
              alt="Project 1"
              className="img-fluid shadow rounded "
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <span>Controlling</span> Media <span>Player</span>
            <img
              src={p5}
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <span>Health</span> Monitoring <span>Using IoT</span>
            <img
              src={res1}
              alt="Project 1"
              className="img-fluid shadow rounded "
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <span>Ayisha</span> Quarters <span>Website</span>
            <img
              src={ayisha}
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
        </div>
        <button onClick={more} className="button ">
          More Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
