import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import closeIcon from "../../assets/icon-close.svg";
import styles from "./Header.module.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.Header}>
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div className={styles.desktop_links}>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Production</a>
        <a href="#">Support</a>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <img src={showMenu ? closeIcon : hamburger} alt="" />
      </div>
    </header>
  );
}

export default Header;
