import React, { ReactNode } from "react";
import styles from "./footer.module.css"; 

export default function Footer(): ReactNode {
  return (
    <footer className={styles.container}>
      © 2024 All Rights Reserved
    </footer>
  );
}