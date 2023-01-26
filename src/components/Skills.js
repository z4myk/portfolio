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
import imagen1 from '../assets/item1.png'
export const Skills = () => {

    
    return (
        <div data-aos="fade-down" data-aos-duration="1000">
             <section className=" mb-5 mt-5 container">
           <span className=" d-flex justify-content-start" data-aos="fade-down" data-aos-duration="1000">
          <img src={imagen1} alt="imagen"  className="itemPagina"/>
        </span>
        <h2 className="text-center mb-3" id="Skills">
          Skills
        </h2>
        <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        <div className="responsiveMobile container">
          <div className="d-flex flex-wrap gap-5 justify-content-center mx-5 text-center ">
            <div className=" mb-3">
              <img  src={html} className=" logoSkill"  alt="html" />
              <p className="mt-1">HTML5</p>
            </div>
            <div className="mb-3 ">
              <img  src={css} className=" logoSkill " alt="css" />
              <p className="mt-1">CSS</p>
            </div>
            <div className="  mb-3 ">
              <img  src={bootstrap} className=" logoSkill " alt="bootstrap" />
              <p className="mt-3">Bootstrap</p>
            </div>
            <div className="  mb-3 "> 
            <img  src={javascript} className=" javascript" alt="javascript"  />
            <p className="">javascript</p>
            </div>
            <div className="   mb-3 ">
            <img  src={react} className=" logoSkill" alt="react" />
            <p className="mt-2">React</p>
            </div>  
            <div className="  mb-3">
            <img  src={git} className="logoSkill"  alt="git" />
            <p className="mx-3">GIT</p>
            </div>
            <div className="  mb-3">
            <img  src={nodejs} className=" javascript" alt="javascript"  />
            <p>Node JS</p>
            </div>  
            <div className="  mb-3">
            <img  src={mongodb} className=" mongo mt-3" alt="mongodb" />
            <p className="mt-4">Mongo DB</p>
            </div>
            <div className="  mb-3">
            <img  src={firebase} className=" firebase" alt="firebase" />
            <p className="mt-1">Firebase</p>
            </div>
            <div className="mb-3">
            <img  src={photoshop} className=" photoshop"  alt="photoshop cs6" />
            <p className="mt-2">Photoshop</p>
            </div>  
            <div className="  mb-3">
            <img  src={cinema} className="cinema" alt="cinema4d"  />
            <p className="mt-2">Cinema 4D</p>
            </div>
          </div>
        </div>
        </section>
        <span className=" d-flex justify-content-end container" data-aos="fade-down" data-aos-duration="1000">
          <img src={imagen1} alt="imagen"  className="itemPagina"/>
        </span>
        </div>
    )
}
