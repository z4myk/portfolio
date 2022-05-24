
import './App.css';
import { Navbar } from './components/Navbar';
import CV from './assets/SebastianArielMosquera-CV.pdf';
import foto from './assets/foto.svg';
function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="my-5 container">
        <div className="row">
        <div className="col-md-7 col-sm-12">
        <h2 className="mx-5 text-light effect">Hola! Soy Sebastián Mosquera</h2>
        <h2 className=" mx-5 animate__animated animate__fadeInLeftBig animate__delay-2s">Frontend Developer</h2>
        <a  className=" mx-5 animate__animated animate__fadeIn animate__delay-2s" target="_blank" href={CV}><button className="btn btn-outline-light">Descargar CV</button></a>
      </div>
      <div className="col-md-5 col-sm-12">
        <img src={foto} className="w-100 my-1 imagen animate__animated animate__fadeInRightBig animate__delay-2s"  alt="imagen de software"/>
      </div>

        </div>
      </section>
    </div>
  );
}

export default App;
