import React from "react"
import styles from './Header.module.scss'
import MenuButton from "./menuButton/MenuButton";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoIconContainer}>
        <img src='/img/logo.png' alt="logo" className={styles.logo}/>
        <MenuButton/>
      </div>
    </div>
  )
}

export default Header;
