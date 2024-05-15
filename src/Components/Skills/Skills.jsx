import React from "react";
import "./Skills.css";

import html from '../../assets/icons/html.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import css from '../../assets/icons/css.png'
import aws from '../../assets/icons/aws.png'
import docker from '../../assets/icons/docker.png'
import git from '../../assets/icons/git.png'
import js from '../../assets/icons/js.png'
import mongo from '../../assets/icons/mongo.png'
import node from '../../assets/icons/node.png'
import p from '../../assets/icons/p.png'
import react from '../../assets/icons/react.png'
import tailwind from '../../assets/icons/tailwind.svg'

const Skills = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="skills">
      <h3 className="py-3 ">
        My <span>Skills</span> {/* &#9733 &#9733 */}
      </h3>
      <div className="container my-5 py-5 text-center" id="skillsContainer">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12 my-3">
            <div className="row mx-0 sm-mx-3 align-items-center mb-5">
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={html}
                    alt="HTML"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span >★★★★</span>★
                  </h6>
                </a>
              </div>
              
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={css}
                    alt="CSS"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={js}
                    alt="JavaScript"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={bootstrap}
                    alt="Bootstrap"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={node}
                    alt="Node"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★★</span>
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={mongo}
                    alt="Mongo"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={docker}
                    alt="Docker"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={aws}
                    alt="Aws"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={p}
                    alt="P"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={react}
                    alt="React"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={git}
                    alt="Git"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 py-3 px-3">
                <a className="text-decoration-none">
                  <img
                    src={tailwind}
                    alt="Tailwind"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </a>
              </div>
            </div>
            
            <p className="my-3 mx-3" id="skillsText">
              Embrace growth, each step forward gets you closer transforming
              <span> mastery</span>. <br />
              Build upon your skills, transforming
              <span> 3s into 4s</span>, and <span>4s into 5s</span>, one at a
              time..!!
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
