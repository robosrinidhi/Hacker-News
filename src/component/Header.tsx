import React from "react";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.headerCon}>
      <h1 className={styles.heading}>Hacker News Top Stories</h1>
    </div>
  );
};

export default Header;
