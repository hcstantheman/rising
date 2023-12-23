import React from "react";
import styles from "./css/button.module.scss";
import Link from "next/link";

interface ButtonProps {
  text: string;
  to: string;
}

const StyleButton: React.FC<ButtonProps> = ({text, to}) => {

  return (
    <Link href={to} passHref>
      <div className={styles.button}>
        <div className={styles.layer}></div>
        <div className={styles.topLayer}>
          <span className={styles.buttonText}>{text}</span>
        </div>
      </div>
    </Link>
  );
}

export default StyleButton;