import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <>
      <div className="p-5 bg-dark text-light text-center">
        <p className="small">Desarrollado por Sebastián Ariel Mosquera</p>
        <div className="d-flex justify-content-end">
          <a
            href="https://www.facebook.com/zev1t.cs/"
            target="_blank"
            rel="noreferrer"
            className="linkLogo"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="mx-3 pointer logoRedesSociales"
              size="lg"
            />
          </a>
          <a
            href="https://twitter.com/z4myk"
            target="_blank"
            rel="noreferrer"
            className="linkLogo"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="mx-3 logoRedesSociales"
              size="lg"
            />
          </a>
          <a
            href="https://www.instagram.com/z4myk/?hl=es-la"
            target="_blank"
            rel="noreferrer"
            className="linkLogo"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="mx-3 logoRedesSociales"
              size="lg"
            />{" "}
          </a>
          <a
            href="https://github.com/z4myk"
            target="_blank"
            rel="noreferrer"
            className="linkLogo"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="mx-3 logoRedesSociales"
              size="lg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastianmosquera/"
            target="_blank"
            rel="noreferrer"
            className="linkLogo"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="mx-3 logoRedesSociales"
              size="lg"
            />
          </a>
        </div>
      </div>
    </>
  );
};
