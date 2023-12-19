import React from "react";
import styles from "./css/charge.module.scss";
import DottedLine from "../../common/DottedLine";
import ConditionCard from "./conditionCard";

const Charge: React.FC = () => {
  return(
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>ご利用条件</p>
        <DottedLine numDots={24}/>
      </div>
      <div className={styles.cardContainer}>
        <ConditionCard firstLine={'要介護（支援）認定を'} secondLine={'受けている方'}/>
        <ConditionCard firstLine={'訪問診療を'} secondLine={'受けている方'}/>
        <ConditionCard firstLine={'通院が困難な方'}/>
      </div>
    </div>
  )
}

export default Charge;