import React from "react";
import "./Achievment.css";
import a1 from '../../assets/a1.jpg'
import a2 from '../../assets/a2.jpg'
import a3 from '../../assets/a3.jpg'

const Projects = () => {
  function more() {
    window.open('https://drive.google.com/drive/u/0/folders/1lY5TRBzF1AMS6UhEs-msZC6o4G7OhXXp', '_blank');
  }
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      {/* <div class="container"> */}
      <h4 class="py-3 ">
        My <span>Awards and Achievements</span>
      </h4>
      {/* </div> */}
      <div className="container my-1">
        <div class="row">
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <img
              src={a1}
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <img
              src={a2}
              alt="Project 1"
              className="img-fluid shadow rounded"
            />
          </div>
          <div class="col-12 col-md-4 px-4 py-4 projImg">
            <img
              src={a3}
              alt="Project 1"
              className="img-fluid shadow rounded "
            />
          </div>
        </div>
        <button onClick={more} className="button ">
          More 
        </button>
      </div>
    </div>
  );
};

export default Projects;
