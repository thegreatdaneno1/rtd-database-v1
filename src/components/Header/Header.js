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
          <a to="/" className={styles.link}>
            SEARCH BY REGION
          </a>
          <a to="/" className={styles.link}>
            RACE CALENDAR
          </a>
          <a to="/" className={styles.link}>
            ABOUT US
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
