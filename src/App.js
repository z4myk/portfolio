import "./App.css";
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
function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="my-5 container">
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
        <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio itaque nobis laudantium iste vel sit laborum amet commodi perspiciatis voluptatibus eius, sint fugit at excepturi aperiam vitae quam explicabo molestiae libero? Eveniet natus ipsam soluta distinctio veniam illo eaque quod obcaecati? Incidunt dolorum ad quae, quod quasi unde ipsa placeat amet doloremque neque inventore expedita facilis pariatur, eaque nihil distinctio explicabo tempore nulla illum veritatis quam sed deserunt hic officiis. Inventore, tempora optio quibusdam eius asperiores illum itaque neque accusamus error voluptates ratione vitae assumenda. Quis quo iste blanditiis unde doloribus rem ipsam dolorum dolor atque ipsum! Ipsum, velit.
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
          <div className="d-flex flex-wrap justify-content-between mx-5 ">
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
        <section className="container">
          <h2 className="my-5 mb-2 text-center" id="proyectos">Proyectos</h2>
          <div className="d-flex justify-content-around">
            <hr className="w-25"/>
            <hr className="w-25"/>
        </div>
        <div className="d-flex justify-content-center flex-wrap ">

        <div className="cardcito mx-3 mb-3">
            <div className="card2">
              <img src={eccomerce} alt="tienda digital" className="w-100 imagenProyecto" />
              <p className="container my-2 text-light text-center">E-ccomerce desarrollado con React, Bootstrap y auth0 para la autenticación</p>
              <div className="container">
              <button className="botonProyecto mx-3"><a  target="_blank" href="https://github.com/z4myk/e-ccomerce-reactjs">Github</a></button>
            <button className="botonProyecto"><a  target="_blank" href="https://eccomercesam.netlify.app/">Deploy</a></button>

              </div>
            </div>
        </div>    
        <div className="cardcito mx-3 mb-3">
            <div className="card2">
            <img src={veterinarycrud} alt="tienda digital" className="w-100 imagenProyecto" />
              <p className="container my-2 text-light text-center">Sistema de gestión de turnos para veterinaria CRUD con autenticación creado con React Bootstrap y Auth0</p>
              <div className="container">
              <button className="botonProyecto mx-3"><a  target="_blank" href="https://github.com/z4myk/crud-veterinary">Github</a></button>
            <button className="botonProyecto"><a  target="_blank" href="https://veterinarycrud.netlify.app/">Deploy</a></button>
              </div>
            </div>
        </div>    
        <div className="cardcito mx-3 mb-3">
            <div className="card2">
            <img src={rollingnew} alt="tienda digital" className="w-100 imagenProyecto" />
              <p className="container my-2 text-light text-center">Sitio web de noticias autoadministrable con React Node js y Mongo DB</p>
              <div className="container">
              <button className="botonProyecto mx-3"><a  target="_blank" href="https://github.com/z4myk/RollingCodeNew/tree/master">Github</a></button>
            <button className="botonProyecto"><a  target="_blank" href="https://rollingnewsg2.netlify.app/">Deploy</a></button>
              </div>
            </div>
        </div>   
        <div className="cardcito mx-3">
            <div className="card2">
            </div>
        </div>    

        </div>
        </section>
        
        <section className="row"> 
          <h2 className="text-center my-5 " id="contactame">Contáctame</h2>
          <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        <div className="col-md-3 col-sm-12 text-center">
         <a target="_blank" href="https://www.linkedin.com/in/sebastianmosquera/" className="linka"><button class="botoncito w-100 my-5">Linkedin</button></a>
        
        <a target="_blank" href="https://github.com/z4myk" className="linka"><button class="botoncito w-100 my-5">Github</button></a> 
        
        <a href="mailto:sebimosquera@gmail.com" className="linka"><button class="botoncito w-100"> Email</button></a>
 

        </div>
        <form className="container col-md-8 col-sm-12 my-3">
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Nombre</label>
        <input type="text" className="form-control bg-dark text-light inputForm shadow-none" id="exampleFormControlInput1" placeholder="Nombre" required/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control bg-dark inputForm shadow-none text-light" id="exampleFormControlInput1" placeholder="name@example.com" required />
        </div>
        <div className="mb-3 ">
        <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
        <textarea className="form-control bg-dark text-light w-100 inputForm shadow-none" id="exampleFormControlTextarea1" rows="4" required></textarea>
        </div>
        <button className="botonProyecto">Enviar</button>
        
        </form>
        
        </section>

        {/* <div className="glass border-rounded ">
            <div className="mb-3">
            <img  src={html} className=" logoSkill "  />
            <p>HTML</p>
            <img  src={css} className=" logoSkill "  />
            <p>CSS</p>
            <img  src={bootstrap} className=" logoSkill "  />
            <p>Bootstrap</p>
            <img  src={javascript} className=" logoSkill"  />
            <p>Javascript</p>
            </div>
            <img  src={react} className=" logoSkill"  />
            <p>React</p>
            <img  src={nodejs} className=" logoSkill"  />
            <p>Node Js</p>
            <img  src={mongodb} className=" logoSkill"  />
            <p>Mongo DB</p>
            <img  src={firebase} className=" logoSkill"  />
            <p>Firebase</p>
          </div> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
