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
      <section className=" mb-5 container">
        <h2 className="text-center mb-3" id="Skills">
          Skills
        </h2>
        <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 offset-md-0">
            <div className="mx-5 glass mb-3">
              <img  src={html} className=" logoSkill"  />
              <span className="mx-4">HTML5</span>
            </div>
            <div className="mx-5 glass mb-3">
              <img  src={css} className=" logoSkill "  />
              <span className="mx-4">CSS</span>
            </div>
            <div className="mx-5 glass mb-3">
              <img  src={bootstrap} className=" logoSkill "  />
              <span className="mx-4">Bootstrap</span>
            </div>
            <div className="mx-5 glass mb-3"> 
            <img  src={javascript} className=" javascript"  />
            <span className="mx-1">javascript</span>
            </div>
            <div className=" mx-5 glass mb-3">
            <img  src={react} className=" logoSkill"  />
            <span className="mx-4">React</span>
            </div>  
          </div>
          <div className="col-md-6 col-sm-12 ">

            <div className=" mx-5 glass mb-3">
            <img  src={nodejs} className=" javascript"  />
            <span>Node JS</span>
            </div>  

            <div className="mx-5 glass mb-3">
            <img  src={mongodb} className=" mongo"  />
            <span>Mongo DB</span>
            </div>

            <div className="mx-5 glass mb-3">
            <img  src={firebase} className=" firebase"  />
            <span>Firebase</span>
            </div>
            <div className=" mx-5 glass mb-3">
            <img  src={photoshop} className=" photoshop"  />
            <span className="mx-4">Photoshop</span>
            </div>  
            <div className="mx-5 glass mb-3">
            <img  src={cinema} className="cinema"  />
            <span>Cinema 4D</span>
            </div>

          </div>

        </div>
        <section>
          <h2 className="my-4 mb-2 text-center">Proyectos</h2>
          <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
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
