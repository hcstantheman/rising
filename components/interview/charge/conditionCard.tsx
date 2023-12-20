import React from "react";
import styles from "./css/conditionCard.module.scss";

interface Props {
  firstLine: string;
  secondLine?: string;
}

const ConditionCard: React.FC<Props> = ({firstLine, secondLine}) => {
  return(
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <p className={styles.text}>{firstLine}</p>
        {
          secondLine ?
            <p className={styles.text}>{secondLine}</p> : null
        }
      </div>
    </div>
  )
}

export default ConditionCard;