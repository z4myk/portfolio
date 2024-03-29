import React from "react";
import '../App.css';
import logo from '../assets/logo.png'
import logosm from '../assets/logosm.png'
export const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-dark fixed-top mb-5">
  <div class="container-fluid">
    <a class="navbar-brand text-light efectoLista" href="#" id="inicio" ><img src={logosm} className="logosm" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 mx-5 ms-auto">
        <li class="nav-item">
          <a class="nav-link efectoLista"  aria-current="page" href="#">Inicio</a>
        </li>

        <li class="nav-item">
          <a class="nav-link efectoLista" href="#Skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link efectoLista" href="#proyectos">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link efectoLista" href="#contactame">Contáctame</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  );
};
