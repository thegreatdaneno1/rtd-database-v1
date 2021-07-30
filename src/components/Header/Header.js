import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <a to="/">
            {/* <img src={} className={styles.logo} /> */}
            <span className={styles.title}>RTD Track Database</span>
          </a>
        </div>
        <div className={styles.links}>
          <a href="/" className={styles.link}>
            SILVERSTONE
          </a>
          <a href="/" className={styles.link}>
            RACE CALENDAR
          </a>
          <a href="/" className={styles.link}>
            ABOUT US
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
