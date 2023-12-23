import React from 'react';
import styles from './css/infoContainer.module.scss';

interface InfoContainerProps {
  title: string,
  firstLine: string,
  secondLine?: string,
}

const InfoContainer: React.FC<InfoContainerProps> = (props) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.leftContainer}>
        <p>{props.title}</p>
      </div>
      <div className={styles.rightContainer}>
        <p>{props.firstLine}</p>
        {props.secondLine && <p>{props.secondLine}</p>}
      </div>
    </div>
  )
}

export default InfoContainer;