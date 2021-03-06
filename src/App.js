import "./App.css";
import React, {useRef} from 'react'
import emailjs from "emailjs-com"
import { Navbar } from "./components/Navbar";
import CV from "./assets/SebastianArielMosquera-CV.pdf";
import foto from "./assets/foto.svg";
import { Footer } from "./components/Footer";
import html from "./assets/html.png";
import css from "./assets/css.png";
import bootstrap from "./assets/bootstrap.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import nodejs from "./assets/nodejs.png";
import mongodb from "./assets/mongodb.png";
import firebase from "./assets/firebase.png";
import cinema from "./assets/cinema.png"
import photoshop from "./assets/photoshop.png"
import eccomerce from "./assets/eccomerce.png"
import git from "./assets/git.png"
import veterinarycrud from './assets/veterinarycrud.png'
import rollingnew from './assets/rollingnew.png'
import Swal from 'sweetalert2'
function App() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g5hfj0e', 'template_g0smync', e.target, 'user_uwxcdlUFTlwvmAedFHN2X')
      .then((result) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El email se a enviado con exito!',
            showConfirmButton: false,
            timer: 1500
          })
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
      <Navbar />
    <div className="App container">
      <section className="my-5 container pt-5 ">
        <div className="row">
          <div className="col-md-7 col-sm-12 mb-4">
            <h2 className="text-light effect">Hola! Soy Sebastián Mosquera</h2>
            <h2 className=" animate__animated animate__fadeInLeftBig animate__delay-2s">
            Frontend Developer
            </h2>
            <a
              className="animate__animated animate__fadeIn animate__delay-2s"
              target="_blank"
              rel="noreferrer"
              href={CV}
            >
              <button className="btn btn-outline-light ">
                Descargar CV <span></span>
              </button>
            </a>
          </div>
          <div className="col-md-5 col-sm-12">
            <img
              src={foto}
              className="w-100 my-1 imagen animate__animated animate__fadeInRightBig animate__delay-2s"
              alt="imagen de software"
            />
          </div>
        </div>
      </section>
      <section className="container mb-5">
        <h2 className="text-center " id="sobreMi">
          Sobre Mi
        </h2>
        <div className="d-flex justify-content-around mb-5">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        
        <p className="about">
        Hola! Mi nombre es Sebastián Ariel Mosquera, tengo 21 años y soy un desarrollador de software apasionado por la tecnología, metódico, resiliente y autodidacta. Motivado a seguir incrementando mis conocimientos para crecer profesionalmente, considero que la comunicación y el trabajo en equipo es esencial para poder crecer como desarrollador. Aspiro a potenciar mis habilidades técnicas y de liderazgo para, en un futuro, estar a cargo de un equipo y llevar adelante proyectos.
        </p>
      </section>
      <section className=" mb-5  container">
        <h2 className="text-center mb-3" id="Skills">
          Skills
        </h2>
        <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        <div className="responsiveMobile">
          <div className="d-flex flex-wrap gap-3 justify-content-center mx-5 ">
            <div className="glass mb-3">
              <img  src={html} className=" logoSkill"  />
              <span className="mx-4">HTML5</span>
            </div>
            <div className=" glass mb-3">
              <img  src={css} className=" logoSkill "  />
              <span className="mx-4">CSS</span>
            </div>
            <div className=" glass mb-3">
              <img  src={bootstrap} className=" logoSkill "  />
              <span className="mx-4">Bootstrap</span>
            </div>
            <div className=" glass mb-3"> 
            <img  src={javascript} className=" javascript"  />
            <span className="mx-1">javascript</span>
            </div>
            <div className="  glass mb-3">
            <img  src={react} className=" logoSkill"  />
            <span className="mx-4">React</span>
            </div>  
            <div className=" glass mb-3">
            <img  src={git} className="logoSkill"  />
            <span className="mx-3">GIT</span>
            </div>
            <div className=" glass mb-3">
            <img  src={nodejs} className=" javascript"  />
            <span>Node JS</span>
            </div>  
            <div className=" glass mb-3">
            <img  src={mongodb} className=" mongo"  />
            <span>Mongo DB</span>
            </div>
            <div className=" glass mb-3">
            <img  src={firebase} className=" firebase"  />
            <span>Firebase</span>
            </div>
            <div className=" glass mb-3">
            <img  src={photoshop} className=" photoshop"  />
            <span className="mx-4">Photoshop</span>
            </div>  
            <div className=" glass mb-3 mb-5">
            <img  src={cinema} className="cinema"  />
            <span>Cinema 4D</span>
            </div>
          </div>
        </div>
        </section>
        <section className="container">
          <h2 className="my-5 mb-2 text-center" id="proyectos">Proyectos</h2>
          <div className="d-flex justify-content-around mb-5">
            <hr className="w-25"/>
            <hr className="w-25"/>
        </div>
        <div className="d-flex justify-content-center flex-wrap ">

        <div className="cardcito mx-3 mb-3">
            <div className="card2">
              <img src={eccomerce} alt="tienda digital" className="w-100 imagenProyecto" />
              <p className="container my-2 text-light text-center">E-ccomerce con autenticación desarrollado con React, Bootstrap, y auth0</p>
              <div className="container">
            <a  target="_blank" href="https://github.com/z4myk/e-ccomerce-reactjs"><button className="botonProyecto mx-3 text-light">Github</button></a>
            <a  target="_blank" href="https://eccomercesam.netlify.app/"><button className="botonProyecto text-light">Deploy</button></a>

              </div>
            </div>
        </div>    
        <div className="cardcito mx-3 mb-3">
            <div className="card2">
            <img src={veterinarycrud} alt="tienda digital" className="w-100 imagenProyecto" />
              <p className="container my-2 text-light text-center">Sistema de gestión de turnos para veterinaria CRUD con autenticación creado con React, Bootstrap y Auth0</p>
              <div className="container">
              <a  target="_blank" href="https://github.com/z4myk/crud-veterinary"><button className="botonProyecto mx-3 text-light">Github</button></a>
            <a  target="_blank" href="https://veterinarycrud.netlify.app/"><button className="botonProyecto text-light">Deploy</button></a>
              </div>
            </div>
        </div>    
        <div className="cardcito mx-3 mb-3">
            <div className="card2">
            <img src={rollingnew} alt="tienda digital" className="w-100 imagenProyecto" />
              <p className="container my-2 text-light text-center">Sitio web de noticias autoadministrable con React, Node js, express y Mongo DB</p>
              <div className="container">
              <a  target="_blank" href="https://github.com/z4myk/RollingCodeNew/tree/master"><button className="botonProyecto mx-3 text-light">Github</button></a>
            <a  target="_blank" href="https://rollingnewsg2.netlify.app/"><button className="botonProyecto text-light">Deploy</button></a>
              </div>
            </div>
        </div>   
        {/* <div className="cardcito mx-3">
            <div className="card2">
            </div>
        </div>     */}

        </div>
        </section>
        
        <section className="row justify-content-center "> 
          <h2 className="text-center my-5 " id="contactame">Contáctame</h2>
          <p className="text-center">Podés enviarme un mensaje, ya sea para solicitar un proyecto, para contratarme, sugerir alguna mejora o incluso saludarme.</p>
          <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        <div className="col-md-6 col-sm-12 justify-content-center text-center">
         <a target="_blank" href="https://www.linkedin.com/in/sebastianmosquera/" className="linka"><button class="botoncito w-75 my-5">Linkedin</button></a>
        
        <a target="_blank" href="https://github.com/z4myk" className="linka"><button class="botoncito w-75 my-5">Github</button></a> 
        
        <a href="mailto:sebimosquera@gmail.com" className="linka"><button class="botoncito w-75"> Email</button></a>
 

        </div>
        <form className="container col-md-6 col-sm-12 my-3 justify-content-center" onSubmit={sendEmail}>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Nombre</label>
        <input type="text" className="form-control bg-dark text-light inputForm shadow-none w-75" id="exampleFormControlInput1" name="name" placeholder="Nombre" required/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control bg-dark inputForm shadow-none text-light w-75" id="exampleFormControlInput1" name="email" placeholder="name@example.com" required />
        </div>
        <div className="mb-3 ">
        <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
        <textarea className="form-control bg-dark text-light inputForm shadow-none w-75" id="exampleFormControlTextarea1" rows="4" name="message" placeholder="Escriba su mensaje..." required></textarea>
        </div>
        <button className="botonProyecto text-light" value="Send" type="submit">Enviar</button>
        </form>
      </section>
    </div>
      <Footer />
    </>
  );
}

export default App;
