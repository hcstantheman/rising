import React from 'react'
import styles from './css/singleLegend.module.scss'

interface IconTextProps {
  iconSrc: string;
  text: string;
}

const IconText: React.FC<IconTextProps> = ({ iconSrc, text }) => {
  return (
    <div className={styles.iconTextContainer}>
      <img src={iconSrc} alt="icon" className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default IconText;
