import React from "react";
import styles from "./css/button.module.scss";

interface ButtonProps {
  text: string;

}

const StyleButton: React.FC<ButtonProps> = ({text}) => {
  return (
    <div className={styles.button}>
      <div className={styles.layer}></div>
      <div className={styles.topLayer}>
        <span className={styles.buttonText}>{text}</span>
      </div>
    </div>
  );
}

export default StyleButton;