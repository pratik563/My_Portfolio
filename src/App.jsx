import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Certificate from "./sections/Certificate";
import Navbar from "./sections/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
