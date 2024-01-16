import React, {useEffect, useState} from "react";
import styles from "./css/price.module.scss";
import DottedLine from "../../common/DottedLine";
import PriceTable from "./table";
import PriceNote from "./note";

const Price: React.FC = () => {
  const [numDots, setNumDots] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setNumDots(window.innerWidth <= 860 ? 38 : 66);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return(
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.lineContainer}>
          <p className={styles.title}>訪問1回あたりのご利用料金</p>
          <div className={styles.button}>月4回まで</div>
        </div>
        <DottedLine numDots={numDots} wider={true}/>
      </div>
      <div className={styles.tableContainer}>
        <PriceTable/>
      </div>
      <div className={styles.noteContainer}>
        <PriceNote/>
      </div>
    </div>
  )
}

export default Price;