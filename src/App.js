import "./App.css";
import React from 'react'
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Proyects } from "./components/Proyects";
import { Contact } from "./components/Contact";
function App() {


  return (
    <>
      <Navbar />
    <div className="App">
      <Header />
     <About />
     <Skills />
      <Proyects />
       <Contact />
    </div>
      <Footer />
    </>
  );
}

export default App;
