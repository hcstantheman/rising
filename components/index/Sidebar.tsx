import React from 'react';
import indexBranches from "../../const/menuBranch";
import styles from './css/sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      {indexBranches.map((item, index) => (
        <a key={index} href={item.path} className={styles.menuItem}>
          <div className={styles.optionWrapper}>
            <p>{item.label}</p>
            <div className={styles.svgWrapper}></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
