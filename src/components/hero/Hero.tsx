import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.wrapper}>
        <h1>Immersive experiences that deliver</h1>
      </div>
    </section>
  );
}

export default Hero;
