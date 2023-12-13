import React from 'react';
import styles from './css/dottedLine.module.scss';

interface DottedLineProps {
  numDots: number;
  vertical?: boolean;
}

const DottedLine: React.FC<DottedLineProps> = ({ numDots, vertical }) => {
  const dots = [];

  for (let i = 0; i < numDots; i++) {
    dots.push(<div className={styles.dot} key={i}></div>);
  }

  const dottedLineStyle = vertical ? `${styles.dottedLine} ${styles.vertical}` : styles.dottedLine;

  return <div className={dottedLineStyle}>{dots}</div>;
};

export default DottedLine;

