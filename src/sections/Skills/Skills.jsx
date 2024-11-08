import React from "react";
import styles from "./Skills.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillsCard from "../../common/SkillsCard";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsCard src={checkMarkIcon} skill="HTML5" />
        <SkillsCard src={checkMarkIcon} skill="CSS3" />
        <SkillsCard src={checkMarkIcon} skill="JavaScript" />
        <SkillsCard src={checkMarkIcon} skill="React.js" />
        <SkillsCard src={checkMarkIcon} skill="TailWind Css" />
        <SkillsCard src={checkMarkIcon} skill="BootStrap" />
        <hr />
      </div>

      <div className={styles.skillList}>
        <SkillsCard src={checkMarkIcon} skill="Python" />
        <SkillsCard src={checkMarkIcon} skill="SQL" />
        <SkillsCard src={checkMarkIcon} skill="Node.js" />
        <SkillsCard src={checkMarkIcon} skill="Redux" />

        <hr />
      </div>

      <div className={styles.skillList}>
        <SkillsCard src={checkMarkIcon} skill="Git" />
        <SkillsCard src={checkMarkIcon} skill="VS Code" />
        <SkillsCard src={checkMarkIcon} skill="AWS" />
        <SkillsCard src={checkMarkIcon} skill="Postman" />
        <SkillsCard src={checkMarkIcon} skill="GitHub" />
        <SkillsCard src={checkMarkIcon} skill="Figma" />
        <hr />
      </div>

      <div className={styles.skillList}>
        <SkillsCard src={checkMarkIcon} skill="MongoDB" />
        <SkillsCard src={checkMarkIcon} skill="MySql" />
        <hr />
      </div>
    </section>
  );
}

export default Skills;
