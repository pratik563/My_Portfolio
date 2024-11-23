import React from "react";
import PythonIcon from "./../assets/python.svg";
import ReactIcon from "./../assets/react.svg";
import JavascriptIcon from "./../assets/javascript.svg";
import AwsIcon from "./../assets/aws.svg";

const Certificate = () => {
  return (
    <div
      id="certificate"
      className="sm:min-h-screen flex flex-col py-32 px-1 sm:py-12 items-center text-center"
    >
      <h1 className="text-4xl font-bold mb-10">Certificate</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
        <img src={PythonIcon} className="w-8 sm:w-12" alt="Python_logo" />
        <p className="text-lg text-center">
          Python Certificate -{" "}
          <a
            href="https://www.hackerrank.com/certificates/a216738d1d10"
            className="text-[#00a7a7] hover:underline"
          >
            HackerRank
          </a>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
        <img src={ReactIcon} className="w-8 sm:w-12" alt="React_logo" />
        <p className="text-lg text-center">
          Frontend Developer (React) Certificate -{" "}
          <a
            href="https://www.hackerrank.com/certificates/3cfdc3c6ece8"
            className="text-[#00a7a7] hover:underline"
          >
            HackerRank
          </a>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
        <img src={JavascriptIcon} className="w-8 sm:w-12" alt="JS_logo" />
        <p className="text-lg text-center">
          JavaScript (Intermediate) Certificate -{" "}
          <a
            href="https://www.hackerrank.com/certificates/4bd6c7956303"
            className="text-[#00a7a7] hover:underline"
          >
            HackerRank
          </a>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <img src={AwsIcon} className="w-8 sm:w-12" alt="AWS_logo" />
        <p className="text-lg text-center">
          AWS Cloud Internship Certificate -{" "}
          <a
            href="https://drive.google.com/file/d/1KCLyxZTWgBtK0jJIoOM30nQYqIyW9slN/view"
            className="text-[#00a7a7] hover:underline"
          >
            AWS | Eduskills
          </a>
        </p>
      </div>
    </div>
  );
};

export default Certificate;
