// HamburgerMenu.tsx
import React from 'react';
import indexBranches from "../../const/menuBranch";
import styles from './css/hamburger.module.scss';

type Props = {
  isOpen: boolean;
};

const HamburgerMenu: React.FC<Props> = ({ isOpen }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <p className={styles.title}>調剤薬局一覧</p>
    {indexBranches.map((item, index) => (
      <a key={index} href={item.path} className={styles.menuItem}>
        <div className={styles.optionWrapper}>
          <p>{item.label}</p>
          <div className={styles.svgWrapper}></div>
        </div>
      </a>
    ))}
    </div>
  )
}

export default HamburgerMenu;
