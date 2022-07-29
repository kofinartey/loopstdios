import React from "react";
import imageMobile from "../../assets/mobile/image-interactive.jpg";
import styles from "./Description.module.css";

function Description() {
  return (
    <section className={styles.Description}>
      <div className={styles.wrapper}>
        <img src={imageMobile} alt="" />
        <div className={styles.text_container}>
          <h2 className={styles.heading}>THE LEADER IN INTERACTIVE VR</h2>
          <p className={styles.text}>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description;
