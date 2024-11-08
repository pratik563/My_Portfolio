import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <p>
        Author: &copy; 2024 Pratik Wable. <br />
        All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
