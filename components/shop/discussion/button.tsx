import React from "react";
import styles from "./css/button.module.scss";

interface Props {
  text: string;
  longer?: boolean;
}

const Button: React.FC<Props> = ({text, longer}) => {
  return (
    <div className={longer? styles.containerLonger : styles.container}>
      <p className={longer? styles.buttonTextLonger :styles.buttonText}>{text}</p>
    </div>
  );
}

export default Button;