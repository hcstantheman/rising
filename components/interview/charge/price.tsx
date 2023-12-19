import React from "react";
import styles from "./css/price.module.scss";
import DottedLine from "../../common/DottedLine";
import PriceTable from "./table";

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
      <div className={styles.tableContainer}>
        <PriceTable/>
      </div>
      <div className={styles.noteContainer}>
        <p className={styles.note}>※ご利用には、事前に面談が必要です。</p>
        <p className={styles.note}>※ご利用には、事前に面談が必要です。</p>
      </div>

    </div>
  )
}

export default Price;