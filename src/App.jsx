import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Certificate from "./sections/Certificates/Certificate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
