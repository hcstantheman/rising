import React from "react";
import styles from "./css/button.module.scss";
import Link from "next/link";

interface ButtonProps {
  text: string;
  to: string;
  blue?: boolean;
}

const StyleButton: React.FC<ButtonProps> = ({text, to, blue}) => {
  let buttonStyle = {}
  let topLayerStyle = {}
  let textStyle = {}
  if (blue){
    buttonStyle = {borderColor: '#5EAED2'}
    topLayerStyle = {backgroundColor: '#5EAED2'}
    textStyle = {color: '#FFFFFF'}
  }
  return (
    <Link href={to} passHref>
      <div className={styles.button}>
        <div className={styles.layer} style={buttonStyle}></div>
        <div className={styles.topLayer} style={topLayerStyle}>
          <span className={styles.buttonText} style={textStyle}>{text}</span>
        </div>
      </div>
    </Link>
  );
}

export default StyleButton;