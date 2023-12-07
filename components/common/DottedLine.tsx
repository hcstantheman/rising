import React from 'react';
import styles from './css/dottedLine.module.scss';

interface DottedLineProps {
  numDots: number;
}

const DottedLine: React.FC<DottedLineProps> = ({ numDots }) => {
  const dots = [];

  for (let i = 0; i < numDots; i++) {
    dots.push(<div className={styles.dot} key={i}></div>);
  }

  return <div className={styles.dottedLine}>{dots}</div>;
};

export default DottedLine;
