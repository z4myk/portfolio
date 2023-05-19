import React from "react";
import eccomerce from "../assets/eccomerce.png";
import veterinarycrud from "../assets/veterinarycrud.png";
import rollingnew from "../assets/rollingnew.png";
import heroapp from "../assets/heroapp.png";
import aintechapp from "../assets/aintechfoto.png";
export const Proyects = () => {
  return (
    <div>
    
      <section className="container" data-aos="fade-down">
        <h2 className=" mb-2 text-center" id="proyectos">
          Proyectos
        </h2>
        <div className="d-flex justify-content-around mb-5">
          <hr className="w-25" />
          <hr className="w-25" />
        </div>
        <div className="d-flex justify-content-center flex-wrap ">
          <div className="cardcito mx-3 mb-3">
            <div className="card2">
              <img
                src={eccomerce}
                alt="tienda digital"
                className="w-100 imagenProyecto"
              />
              <p className="container my-2 text-light text-center">
                E-ccomerce con autenticación desarrollado con React, Bootstrap,
                y auth0
              </p>
              <div className="container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/z4myk/e-ccomerce-reactjs"
                >
                  <button className="botonProyecto mx-3 text-light">
                    Github
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://eccomercesam.netlify.app/"
                >
                  <button className="botonProyecto text-light">Deploy</button>
                </a>
              </div>
            </div>
          </div>
          <div className="cardcito mx-3 mb-3">
            <div className="card2">
              <img
                src={veterinarycrud}
                alt="tienda digital"
                className="w-100 imagenProyecto"
              />
              <p className="container my-2 text-light text-center">
                Sistema de gestión de turnos para veterinaria CRUD con
                autenticación creado con React, Bootstrap y Auth0
              </p>
              <div className="container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/z4myk/crud-veterinary"
                >
                  <button className="botonProyecto mx-3 text-light">
                    Github
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://veterinarycrud.netlify.app/"
                >
                  <button className="botonProyecto text-light">Deploy</button>
                </a>
              </div>
            </div>
          </div>
          <div className="cardcito mx-3 mb-3">
            <div className="card2">
              <img
                src={rollingnew}
                alt="tienda digital"
                className="w-100 imagenProyecto"
              />
              <p className="container my-2 text-light text-center">
                Sitio web de noticias autoadministrable con React, Node js,
                express y Mongo DB
              </p>
              <div className="container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/z4myk/RollingCodeNew/tree/master"
                >
                  <button className="botonProyecto mx-3 text-light">
                    Github
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://rollingnewsg2.netlify.app/"
                >
                  <button className="botonProyecto text-light">Deploy</button>
                </a>
              </div>
            </div>
          </div>
          <div className="cardcito mx-3 mb-3">
            <div className="card2">
              <img
                src={heroapp}
                alt="tienda digital"
                className="w-100 imagenProyecto"
              />
              <p className="container my-2 text-light text-center">
                Sitio web buscador de heroes con React, redux y firebase.
              </p>
              <div className="container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/z4myk/HeroApp"
                >
                  <button className="botonProyecto mx-3 text-light">
                    Github
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://reactheroapp.netlify.app/"
                >
                  <button className="botonProyecto text-light">Deploy</button>
                </a>
              </div>
            </div>
          </div>
          <div className="cardcito mx-3 mb-3">
            <div className="card2">
          
              <img
                src={aintechapp}
                alt="sitio web para descargar juegos Aintech Online"
                className="w-100 imagenProyecto"
              />
              <p className="container my-2 text-light text-center">
                plataforma web autoadministrable para descargar juegos con React, Node js express y MongoDB.
              </p>
              <div className="container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  <button className="botonProyecto mx-3 text-light">
                    Github
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://aintech.online/"
                >
                  <button className="botonProyecto text-light">Deploy</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
