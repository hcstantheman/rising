import React from "react";
import styles from "./css/price.module.scss";
import DottedLine from "../../common/DottedLine";

const Price: React.FC = () => {
  return(
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.lineContainer}>
          <p className={styles.title}>訪問1回あたりのご利用料金</p>
          <div className={styles.button}>月4回まで</div>
        </div>
        <DottedLine numDots={66} wider={true}/>
      </div>
      <div className={styles.contentContainer}>
        
      </div>
    </div>
  )
}

export default Price;