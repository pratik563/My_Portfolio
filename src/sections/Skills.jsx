import React from "react";
import githubIcon from "../assets/github-dark.svg";
import HtmlIcon from "./../assets/html-5.svg";
import CssIcon from "./../assets/css-3.svg";
import JavascriptIcon from "./../assets/javascript.svg";
import ReactIcon from "./../assets/react.svg";
import TailwindIcon from "./../assets/tailwind.svg";
import BootstrapIcon from "./../assets/bootstrap.svg";
import PythonIcon from "./../assets/python.svg";
import SqlIcon from "./../assets/sql.svg";
import NodeIcon from "./../assets/node-js.svg";
import GitIcon from "./../assets/git.svg";
import VsIcon from "./../assets/vscode.svg";
import AwsIcon from "./../assets/aws.svg";
import PostmanIcon from "./../assets/postman.svg";
import FigmaIcon from "./../assets/figma.svg";
import MongoIcon from "./../assets/mongodb.svg";
import MysqlIcon from "./../assets/mysql.svg";
import SkillsCard from "../common/SkillsCard";

function Skills() {
  return (
    <section
      id="skills"
      className="sm:min-h-screen flex flex-col py-16 px-2 sm:px-0 sm:py-12 text-center"
    >
      <h1 className="text-4xl font-bold mb-14">Skills</h1>

      <div className="flex flex-wrap justify-center gap-10 sm:gap-12 mb-14">
        <SkillsCard src={HtmlIcon} skill="HTML5" />
        <SkillsCard src={CssIcon} skill="CSS3" />
        <SkillsCard src={JavascriptIcon} skill="JavaScript" />
        <SkillsCard src={ReactIcon} skill="React.js" />
        <SkillsCard src={TailwindIcon} skill="Tailwind CSS" />
        {/* <SkillsCard src={BootstrapIcon} skill="Bootstrap" /> */}
      </div>

      <div className="flex flex-wrap justify-center gap-12 mb-14">
        <SkillsCard src={PythonIcon} skill="Python" />
        <SkillsCard src={NodeIcon} skill="Node.js" />
        <SkillsCard src={SqlIcon} skill="SQL" />
        <SkillsCard src={MongoIcon} skill="MongoDB" />
        <SkillsCard src={MysqlIcon} skill="MySQL" />
      </div>

      <div className="flex flex-wrap justify-center gap-12 mb-14">
        <SkillsCard src={GitIcon} skill="Git" />
        {/* <SkillsCard src={VsIcon} skill="VS Code" /> */}
        <SkillsCard src={AwsIcon} skill="AWS" />
        <SkillsCard src={PostmanIcon} skill="Postman" />
        <SkillsCard src={githubIcon} skill="GitHub" />
        <SkillsCard src={FigmaIcon} skill="Figma" />
      </div>
    </section>
  );
}

export default Skills;
