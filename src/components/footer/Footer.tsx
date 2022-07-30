import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import fb from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import ig from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <div className={styles.links}>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
          </div>
        </div>

        <div className={styles.second}>
          <div className={styles.socials}>
            <img src={fb} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={ig} alt="ig" />
          </div>
          <small>&copy; 2022 Loopstudios. All rights reserved. </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
