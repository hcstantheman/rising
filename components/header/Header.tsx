import React, { useState } from "react";
import styles from './Header.module.scss';
import MenuButton from "./menuButton/MenuButton";
import Image from 'next/image';
import HamburgerMenu from "../common/Hamburger";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.header}>
      <div className={styles.logoIconContainer}>
        <Image
          src='/img/logo.png'
          alt="logo"
          width={320}
          height={54}
          className={styles.icon}
        />
        <MenuButton onClick={toggleMenu}/>
      </div>
      <div className={styles.dynamicText}>{text}</div>
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    </div>
  );
};

export default Header;
