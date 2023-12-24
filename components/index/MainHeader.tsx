import React, {useEffect, useRef, useState} from 'react';
import styles from './css/mainHeader.module.scss';
import Image from 'next/image';
import Link from "next/link";
import menuOptions from "../../const/menuBranch";
import HamburgerMenu from "./Hamburger";

const MainHeader: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (window.innerWidth > 768 && isMenuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return(
    <div className={styles.container}>
      <Image src={'/img/logo.png'} alt={'logo'}
      width={291} height={49}
      className={styles.logo}/>
      <div className={styles.optionContainer}>
        <Link href={'/blog'} className={styles.option}> ブログ一覧 </Link>
        <p className={styles.option} onClick={() => setMenuOpen(!isMenuOpen)}>薬局一覧</p>
        <HamburgerMenu isOpen={isMenuOpen}/>
        <Link href={'/character'} className={styles.option}> 方針 </Link>
        <Link href={'/line'} className={styles.option}> サービス </Link>
      </div>
    </div>
  )
}

export default MainHeader;