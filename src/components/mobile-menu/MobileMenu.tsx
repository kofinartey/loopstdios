import React from "react";
import styles from "./MobileMenu.module.css";

function MobileMenu() {
  return (
    <div className={styles.MobileMenu}>
      <nav className={styles.mobile_links}>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Production</a>
        <a href="#">Support</a>
      </nav>
    </div>
  );
}

export default MobileMenu;
