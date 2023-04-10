import "./App.css";
import React from "react";
import Home from "./Views/Home";
import About from "./Views/About";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <section id="section1">
        <Home />
      </section>
      <section id="section2">
        <About />
      </section>
      <section id="section3">
        <Projects />
      </section>
      <section id="section4">
        <Contact />
      </section>
      <Footer />
      <style jsx="true">{`
        section {
          position: relative;
          padding: 0;
          margin: 0;
          width: 100vw;
          height: 100vh;
        }
        @media only screen and (max-width: 768px) {
          #section {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
