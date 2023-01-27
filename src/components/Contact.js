import React from 'react'
import emailjs from "emailjs-com"
import Swal from 'sweetalert2'
import imagen1 from '../assets/item1.png'
export const Contact = () => {

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
        <div data-aos="fade-down" data-aos-duration="1000">
            <span className=" d-flex justify-content-start container">
          <img src={imagen1} alt="imagen"  className="itemPagina"/>
        </span>
             <section className="row justify-content-center mx-5 "> 
          <h2 className="text-center my-3 " id="contactame">Contáctame</h2>
          <p className="text-center">Podés enviarme un mensaje, ya sea para solicitar un proyecto, para contratarme, sugerir alguna mejora o incluso saludarme.</p>
          <div className="d-flex justify-content-around">
        <hr className="w-25"/>
        <hr className="w-25"/>
        </div>
        <div className="col-md-6 col-sm-12 justify-content-center text-center">
         <a target="_blank"   rel="noreferrer" href="https://www.linkedin.com/in/sebastianmosquera/" className="linka"><button class="botoncito w-100 my-5">Linkedin</button></a>
        
        <a target="_blank"  rel="noreferrer" href="https://github.com/z4myk" className="linka"><button class="botoncito w-100 my-5">Github</button></a> 
        
        <a href="mailto:sebimosquera@gmail.com" className="linka"><button class="botoncito w-100"> Email</button></a>
 

        </div>
        <form className="container col-md-6 col-sm-12 my-3 justify-content-center" onSubmit={sendEmail}>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Nombre</label>
        <input type="text" className="form-control bg-dark text-light inputForm shadow-none w-100" id="exampleFormControlInput1" name="name" placeholder="Nombre" required/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control bg-dark inputForm shadow-none text-light w-100" id="exampleFormControlInput1" name="email" placeholder="name@example.com" required />
        </div>
        <div className="mb-3 ">
        <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
        <textarea className="form-control bg-dark text-light inputForm shadow-none w-100" id="exampleFormControlTextarea1" rows="4" name="message" placeholder="Escriba su mensaje..." required></textarea>
        </div>
        <button className="botonProyecto text-light" value="Send" type="submit">Enviar</button>
        </form>
      </section>
        </div>
    )
}
