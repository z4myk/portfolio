import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import cinema from "../assets/cinema.png"
import photoshop from "../assets/photoshop.png"
import git from "../assets/git.png"
export const Skills = () => {

    
    return (
        <div   data-aos="fade-right" >
             <section className=" mb-5  container">
        <h2 className="text-center mb-3" id="Skills">
          Skills
        </h2>
        <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        <div className="responsiveMobile">
          <div className="d-flex flex-wrap gap-3 justify-content-between mx-5 ">
            <div className=" glass mb-3 mb-2">
              <img  src={html} className=" logoSkill"  alt="html" />
              <span className="mx-4">HTML5</span>
            </div>
            <div className=" glass mb-3 mb-2">
              <img  src={css} className=" logoSkill " alt="css" />
              <span className="mx-4">CSS</span>
            </div>
            <div className=" glass mb-3 mb-2">
              <img  src={bootstrap} className=" logoSkill " alt="bootstrap" />
              <span className="mx-4">Bootstrap</span>
            </div>
            <div className=" glass mb-3 mb-2"> 
            <img  src={javascript} className=" javascript" alt="javascript"  />
            <span className="mx-1">javascript</span>
            </div>
            <div className="  glass mb-3 mb-2">
            <img  src={react} className=" logoSkill" alt="react" />
            <span className="mx-4">React</span>
            </div>  
            <div className=" glass mb-3 mb-2">
            <img  src={git} className="logoSkill"  alt="git" />
            <span className="mx-3">GIT</span>
            </div>
            <div className=" glass mb-3 mb-2">
            <img  src={nodejs} className=" javascript" alt="javascript"  />
            <span>Node JS</span>
            </div>  
            <div className=" glass mb-3 mb-2">
            <img  src={mongodb} className=" mongo" alt="mongodb" />
            <span>Mongo DB</span>
            </div>
            <div className=" glass mb-3 mb-2">
            <img  src={firebase} className=" firebase" alt="firebase" />
            <span>Firebase</span>
            </div>
            <div className=" glass mb-5">
            <img  src={photoshop} className=" photoshop"  alt="photoshop cs6" />
            <span className="mx-4">Photoshop</span>
            </div>  
            <div className=" glass mb-3 mb-5">
            <img  src={cinema} className="cinema" alt="cinema4d"  />
            <span>Cinema 4D</span>
            </div>
          </div>
        </div>
        </section>
        </div>
    )
}
