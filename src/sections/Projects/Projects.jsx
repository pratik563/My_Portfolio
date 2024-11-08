import React from "react";
import styles from "./Projects.module.css";
import weatherlogo from "../../assets/weather_app.jpg";
import textapp from "../../assets/textutils_app.jpg";
import amazonlogo from "../../assets/amazon_app.jpg";
import bmilogo from "../../assets/bmi_app.jpg";
import expenselogo from "../../assets/expense-manage.jpeg";
import reallogo from "../../assets/real-house.jpeg";
import rulelogo from "../../assets/rule-engine.jpeg";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={rulelogo}
          link={"https://github.com/pratik563/zeotap-rule-engine"}
          h3="Rule Engine AST"
          p="|React.js Node.js|"
        />

        <ProjectCard
          src={reallogo}
          link={"https://github.com/pratik563/Multi-Real-Estate"}
          h3="Multi-Page Real Estate"
          p="|React.js|"
        />

        <ProjectCard
          src={expenselogo}
          link={"https://github.com/pratik563/Expense_Manager"}
          h3="Expense Manager"
          p="|React.js|"
        />

        <ProjectCard
          src={weatherlogo}
          link={"https://github.com/pratik563/Weather_App"}
          h3="Real-Time Weather App"
          p="|React.js|"
        />

        <ProjectCard
          src={amazonlogo}
          link={"https://github.com/pratik563/Housing_Price_Prediction"}
          h3="Housing Price Prediction"
          p="|Python|"
        />

        <ProjectCard
          src={textapp}
          link={"https://github.com/pratik563/TextUtils_App"}
          h3="Text-Utils"
          p="|React.js|"
        />

        <ProjectCard
          src={bmilogo}
          link={
            "https://github.com/pratik563/BMI_Generator_Project/tree/main/BMI%20Generator"
          }
          h3="BMI Generator"
          p="|HTML CSS JavaScript|"
        />
      </div>
    </section>
  );
};

export default Projects;
