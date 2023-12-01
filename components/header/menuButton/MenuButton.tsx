import React from 'react';
import styles from './MenuButton.module.scss'; // Make sure to create this SCSS module

const MenuButton = () => {
  return (
    <div className={styles.menuButton}>
        <div className={styles.barContainer}>
        <div className={styles.bar} />
        <div className={`${styles.bar} ${styles.middleBar}`} />
        <div className={styles.bar} />
      </div>
      <div className={styles.menuText}>Menu</div>
    </div>
  );
};

export default MenuButton;
