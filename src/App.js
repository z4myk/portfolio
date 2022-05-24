
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="my-5 container">
      <h2 className="text-light effect">Hola! Soy Sebastián Mosquera</h2>
  <h2 className="animate__animated animate__fadeInLeftBig animate__delay-2s">Frontend Developer</h2>
      </section>
    </div>
  );
}

export default App;
