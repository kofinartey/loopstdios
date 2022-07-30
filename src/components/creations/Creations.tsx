import React from "react";
import styles from "./Creations.module.css";
import creationsData from "../../data/data.json";

function Creations() {
  return (
    <section className={styles.Creations}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2>Our Creations</h2>
          <button className={`${styles.button} ${styles.button1}`}>
            {" "}
            See all
          </button>
        </div>
        <div className={styles.creationsContainer}>
          {creationsData.map((creation) => (
            <div className={styles.creation} key={creation.text}>
              <h3 className={styles.text}>{creation.text}</h3>
              <picture>
                <source
                  srcSet={process.env.PUBLIC_URL + `${creation.images.desktop}`}
                  media="(min-width: 48rem)"
                ></source>
                <img
                  src={process.env.PUBLIC_URL + `${creation.images.mobile}`}
                  alt=""
                />
              </picture>
            </div>
          ))}
        </div>

        <button className={`${styles.button} ${styles.button2}`}>
          See all
        </button>
      </div>
    </section>
  );
}

export default Creations;
