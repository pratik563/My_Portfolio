import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import twitterIcon from "../../assets/twitter-dark.svg"
import linkedinIcon from "../../assets/linkedin-dark.svg"
import githubIcon from "../../assets/github-dark.svg"
import cv from "../../assets/cv3.pdf"

const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile_pic" />
      </div>

      <div className={styles.info}>
       <h1>Pratik <br /> Wable</h1>
       <h2>Frond-End Developer</h2>
       <span>
        <a href="https://x.com/Pratikwable007" target="_blank">
        <img src={twitterIcon} alt="twitter_logo" />
        </a>
        <a href="https://github.com/pratik563" target="_blank">
        <img src={githubIcon} alt="Github_logo" />
        </a>
        <a href="https://www.linkedin.com/in/pratik-wable-240235223/" target="_blank">
        <img src={linkedinIcon} alt="Linkedin_logo" />
        </a>
       </span>

       <p className={styles.description}>With a passion for developing modern react web apps for commercial businesses.</p>
       
       <a href={cv} download>
       <button className="hover">Resume</button>
       </a>
      </div>

    </section>
  );
};

export default Hero;
