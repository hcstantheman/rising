import React from 'react';
import styles from './MenuButton.module.scss'; // Make sure to create this SCSS module

interface MenuButtonProps {
  onClick: () => void;
  exit?: boolean;
}
const MenuButton = ({ onClick,  exit = false }: MenuButtonProps) => {

  const handleClick = () => {
    onClick();
  };
  return (
    <div className={styles.menuButton} onClick={handleClick}>
      <div className={styles.barContainer}>
        <div className={`${styles.bar} ${exit ? styles.topBarExit : ''}`}/>
        <div className={`${styles.bar} ${styles.middleBar} ${exit ? styles.middleBarExit : ''}`}/>
        <div className={`${styles.bar} ${exit ? styles.bottomBarExit : ''}`}/>
      </div>
      <div className={styles.menuText}>{exit ? 'Close' : 'Menu'}</div>
    </div>
  );
};

export default MenuButton;
