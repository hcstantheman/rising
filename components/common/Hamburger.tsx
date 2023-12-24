import React from 'react';
import styles from './css/hamburger.module.scss';
import menuOptions from "../../const/menuOption";
import MenuButton from "../header/menuButton/MenuButton";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void; // Function to toggle the menu's open state
};

const HamburgerMenu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      {/* Exit button at the top of the menu */}
      <div className={styles.exitButton}>
        <MenuButton onClick={toggleMenu} exit={true} />
      </div>

      {/* Existing menu options */}
      {menuOptions.map((item, index) => (
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

export default HamburgerMenu;
