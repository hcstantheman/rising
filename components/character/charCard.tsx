import React from "react";
import styles from "./css/charCard.module.scss";

interface Props {
  title: string;
  line1: string;
  line2?: string;
}

const CharCard: React.FC<Props> = ({ title, line1, line2 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.textBox}>
        <div className={styles.line1}>{line1}</div>
        {line2 ? <div className={styles.line2}>{line2}</div> : null}
      </div>
    </div>
  )
}

export default CharCard;