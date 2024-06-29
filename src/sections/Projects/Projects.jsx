import React from "react";
import styles from "./Projects.module.css";
import weatherlogo from "../../assets/weather_app.jpg"
import colorlogo from "../../assets/color_app.jpg"
import contactus from "../../assets/contactus_app.jpg"
import sportshoe from "../../assets/shoe_app.jpg"
import textapp from "../../assets/textutils_app.jpg"
import amazonlogo from '../../assets/amazon_app.jpg'
import bmilogo from '../../assets/bmi_app.jpg'
import keycodelogo from '../../assets/keycode_app.jpg'
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
      <ProjectCard 
        src={weatherlogo} 
        link={"https://github.com/pratik563/Weather_App"} 
        h3="Weather App "
        p="|React Js|" 
        />

      <ProjectCard 
        src={textapp} 
        link={"https://github.com/pratik563/TextUtils_App"} 
        h3="Text-Utils"
        p="|React Js|" 
        />

      <ProjectCard 
        src={sportshoe} 
        link={"https://github.com/pratik563/Shoe_landing_page"} 
        h3="E-commerce"
        p="|Landing Page ReactJs|" 
        />
        
      <ProjectCard 
        src={contactus} 
        link={"https://github.com/pratik563/Contact_Us"} 
        h3="Contact Us"
        p="|Landing Page ReactJs|" 
        /> 

      <ProjectCard 
        src={colorlogo} 
        link={"https://github.com/pratik563/BG_Changer"} 
        h3="BG Color App"
        p="|React JS|" 
        />

      <ProjectCard 
        src={amazonlogo} 
        link={"https://github.com/pratik563/Amazon_Clone"} 
        h3="Amazon Clone"
        p="|HTML & CSS|" 
        />

       <ProjectCard 
        src={bmilogo} 
        link={"https://github.com/pratik563/BMI_Generator_Project/tree/main/BMI%20Generator"} 
        h3="BMI Generator"
        p="|HTML CSS JavaScript|" 
        />

       <ProjectCard 
        src={keycodelogo} 
        link={"https://github.com/pratik563/Key_Info/tree/main/KeyCode_Check"} 
        h3="KeyCode Check"
        p="|HTML CSS JavaScript|" 
        />
      </div>
    </section>
  );
};

export default Projects;
