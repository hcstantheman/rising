import React from 'react';
import styles from './css/legend.module.scss';
import DottedLine from "../common/DottedLine";

const Legend: React.FC = () => {
  return (
    <div className={styles.legendContainer}>
      <p>マークについてのご説明</p>
      <DottedLine numDots={35}/>
      <p>diu</p>
    </div>
  );
};

export default Legend;
