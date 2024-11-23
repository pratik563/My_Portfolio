import React from "react";
import heroImg from "../assets/hero-img.png";
import vercelIcon from "../assets/vercel-light.svg";
import linkedinIcon from "../assets/linkedin-color.svg";
import EmailIcon from "../assets/gmail-color.svg";
import githubIcon from "../assets/github-dark.svg";
import cv from "../assets/cv3.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="sm:min-h-screen px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center items-center gap-5 text-center h-screen sm:flex-row-reverse sm:justify-evenly"
    >
      <div className="flex justify-center">
        <img
          className="max-w-[200px] sm:max-w-[350px] sm:w-[350px] lg:max-w-[450px] lg:w-[450px]"
          src={heroImg}
          alt="profile_pic"
        />
      </div>

      <div className="flex flex-col items-center gap-9 sm:items-start sm:text-left">
        <h1 className="text-5xl font-bold leading-tight">Pratik Wable </h1>
        <h2 className="text-3xl font-semibold">Software Engineer</h2>
        <span className="flex gap-6 justify-center sm:justify-start">
          <a href="https://vercel.com/pratik-wables-projects" target="_blank">
            <img className="w-12" src={vercelIcon} alt="vercel_logo" />
          </a>
          <a href="https://github.com/pratik563" target="_blank">
            <img className="w-12" src={githubIcon} alt="Github_logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-wable-240235223/"
            target="_blank"
          >
            <img className="w-12" src={linkedinIcon} alt="Linkedin_logo" />
          </a>
          <a href="mailto:pratikwable5630@gmail.com" target="_blank">
            <img className="w-12" src={EmailIcon} alt="Gmail_logo" />
          </a>
        </span>

        <p className="text-xl max-w-[35ch]">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>

        <a href={cv} download>
          <button className="bg-[#00a7a7] text-text-color border-none rounded-[10px] font-semibold w-[120px] h-[50px] text-xl transition-all duration-200 hover:scale-105 active:translate-y-1">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
