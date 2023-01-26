import React from 'react'
import CV from "../assets/SebastianArielMosquera-CV.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import smimagen from '../assets/smimagen.png'
import imagen1 from '../assets/item1.png'
import imagenHeader from '../assets/imagenHeader.svg'
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'



import foto from "../assets/foto.svg";
export const Header = () => {
    return (
        <div>
            <section className="my-5 mb-5 container pt-5" data-aos="fade-down" data-aos-duration="1000">
        <div className="row">
          <div className="col-md-7 col-sm-12 mb-4  mt-5">
            <h1 className="text-light ">¡Hola! Soy Sebastián Mosquera</h1>
            <h2 className="effect">
            Frontend Developer
            </h2>
            <a
              className="linka"
              target="_blank"
              rel="noreferrer"
              href={CV}
            >
              <button className="botoncito">
                Descargar CV <span></span>
              </button>
            </a>
            <div className=" mt-4">
            <a href="https://www.facebook.com/zev1t.cs/" target="_blank" rel="noreferrer" className="linkLogo"><FontAwesomeIcon icon={faFacebook} className="mx-3 pointer logoRedesSociales" size="lg" /></a>
            <a href="https://twitter.com/z4myk" target="_blank" rel="noreferrer" className="linkLogo"><FontAwesomeIcon icon={faTwitter} className="mx-3 logoRedesSociales" size="lg" /></a>
            <a href="https://www.instagram.com/z4myk/?hl=es-la" target="_blank" rel="noreferrer" className="linkLogo"><FontAwesomeIcon icon={faInstagram} className="mx-3 logoRedesSociales" size="lg" /> </a>
            <a href="https://github.com/z4myk" target="_blank" rel="noreferrer" className="linkLogo"><FontAwesomeIcon icon={faGithub} className="mx-3 logoRedesSociales" size="lg" /></a>
            <a href="https://www.linkedin.com/in/sebastianmosquera/" target="_blank"  rel="noreferrer" className="linkLogo"><FontAwesomeIcon icon={faLinkedin} className="mx-3 logoRedesSociales" size="lg" /></a>
            </div>

          </div>
          <div className="col-md-5 col-sm-12 mb-5">
            <img
              src={imagenHeader}
              className="w-100 my-1 imagen animate__animated animate__fadeInRightBig animate__delay-1s"
              alt="imagen de software"
              
            />
          </div>

        </div>
      </section>
        </div>
    )
}
