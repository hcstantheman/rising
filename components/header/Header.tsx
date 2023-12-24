import React from "react"
import styles from './Header.module.scss'
import MenuButton from "./menuButton/MenuButton";
import Image from 'next/image'
interface HeaderProps {
  text: string;
}
const Header: React.FC<HeaderProps> = ({ text }) => {
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
        <MenuButton/>
      </div>
      <div className={styles.dynamicText}>{text}</div>
    </div>
  )
}

export default Header;
