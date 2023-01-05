import React from 'react'
import CV from "../assets/SebastianArielMosquera-CV.pdf";
import foto from "../assets/foto.svg";
export const Header = () => {
    return (
        <div>
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
        </div>
    )
}
