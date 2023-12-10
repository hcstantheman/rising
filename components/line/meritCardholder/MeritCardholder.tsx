import React from "react";
import styles from "./meritCardholder.module.scss";


interface MeritProps {
  index: number;
  firstLine: string;
  secondLine: string;
}
const MeritCardholder:  React.FC<MeritProps> = ({ index, firstLine, secondLine}) => {
  return (
    <div className={styles.cardholderContainer}>
      <div className={styles.circle}>
        <p className={styles.index}>{index}</p>
      </div>
      <div className={styles.rectangle}>
        <div className={styles.innerBox}>
          <p className={styles.content}>{firstLine}</p>
          <p className={styles.content}>{secondLine}</p>
        </div>
      </div>
    </div>
  )
}

export default MeritCardholder;