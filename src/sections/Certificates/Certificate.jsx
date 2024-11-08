import React from "react";
import styles from "./Certificate.module.css";

const Certificate = () => {
  return (
    <div className={styles.container}>
      <h1>Certificate</h1>
      <br />
      <div>
        <p>
          Frontend Developer (React) Certificate -{" "}
          <a href="https://www.hackerrank.com/certificates/3cfdc3c6ece8">
            HackerRank
          </a>
        </p>
      </div>
      <br />
      <div>
        <p>
          JavaScript (Intermediate) Certificate -{" "}
          <a href="https://www.hackerrank.com/certificates/4bd6c7956303">
            HackerRank
          </a>
        </p>
      </div>
      <br />
      <div>
        <p>
          AWS Cloud Virtual Internship Certificate -{" "}
          <a href="https://drive.google.com/file/d/1KCLyxZTWgBtK0jJIoOM30nQYqIyW9slN/view">
            AWS|Eduskills
          </a>{" "}
        </p>
      </div>
      <br />
      <div>
        <p>
          Python Certificate -{" "}
          <a href="https://www.hackerrank.com/certificates/a216738d1d10">
            HackerRank
          </a>{" "}
        </p>
      </div>
      <br />
    </div>
  );
};

export default Certificate;
