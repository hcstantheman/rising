import React from 'react';
import styles from './css/dottedLine.module.scss';

interface DottedLineProps {
  numDots: number;
  vertical?: boolean;
  wider?: boolean;
}

const DottedLine: React.FC<DottedLineProps> = ({ numDots, vertical, wider }) => {
  const dots = [];

  for (let i = 0; i < numDots; i++) {
    dots.push(<div className={styles.dot} key={i}></div>);
  }

  const dottedLineStyle = vertical ? `${styles.dottedLine} ${styles.vertical}` : styles.dottedLine;
    if (wider) {
      return <div className={styles.widerDots}>{dots}</div>;
    }


  return <div className={dottedLineStyle}>{dots}</div>;

};

export default DottedLine;

