import React from 'react'
import styles from './css/merit.module.scss'
import DottedLine from "../common/DottedLine";
import MeritCardholder from "./meritCardholder/MeritCardholder";



const Merit = () => {
  return (
    <div className={styles.meritContainer}>
      <p className={styles.meritText}>メリット</p>
      <DottedLine numDots={23}/>
      <div className={styles.meritCardholder}>
        <MeritCardholder index={1} firstLine={"店舗でのお薬の受取を"} secondLine={"待ち時間なしに！"}/>
        <MeritCardholder index={2} firstLine={"開局時間内であればご都合の良い"} secondLine={"時間にお薬の受取が可能！"}/>
        <MeritCardholder index={3} firstLine={"混雑する時間を避けることが出来"} secondLine={"るので感染症対策にも有効！"}/>
      </div>
    </div>
  );
};

export default Merit;
