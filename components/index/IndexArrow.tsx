import React from 'react';
import styles from './css/indexArrow.module.scss';

const IndexArrowButton: React.FC = () => {
  return (
      <div className={styles.arrowButton}>
        <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
          <ellipse cx="28.0851" cy="27.2213" rx="28.0851" ry="27.2213" className={styles.ellipse}/>
          <path d="M23.2696 37.332L33.7012 27.6101L23.2696 17.8882" className={styles.arrowPath} strokeWidth="3"/>
        </svg>
      </div>

  );
};

export default IndexArrowButton;
