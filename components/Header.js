import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.headerLink}>Home</Link>
      </div>
    </header>
  );
};

export default Header;
