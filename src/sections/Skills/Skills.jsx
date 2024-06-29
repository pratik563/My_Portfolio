import React from 'react'
import styles from './Skills.module.css'
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillsCard from '../../common/SkillsCard'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
       <SkillsCard src={checkMarkIcon} skill="HTML"/>
       <SkillsCard src={checkMarkIcon} skill="CSS"/>
       <SkillsCard src={checkMarkIcon} skill="JavaScript"/>
       <SkillsCard src={checkMarkIcon} skill="React JS"/>
       <hr />
      </div>
      <div className={styles.skillList}>
       <SkillsCard src={checkMarkIcon} skill="Git"/>
       <SkillsCard src={checkMarkIcon} skill="BootStrap"/>
       <SkillsCard src={checkMarkIcon} skill="Figma"/>
       <SkillsCard src={checkMarkIcon} skill="TailWind Css"/>
       <hr />
      </div>
      <div className={styles.skillList}>
       <SkillsCard src={checkMarkIcon} skill="C/C++"/>
       <SkillsCard src={checkMarkIcon} skill="Python"/>
       <SkillsCard src={checkMarkIcon} skill="MySQL"/>
       <hr />
      </div>
    </section>
  )
}

export default Skills