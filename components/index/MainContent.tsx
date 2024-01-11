import React, {useEffect, useState} from 'react';
import styles from './css/mainContent.module.scss';
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
import Image from "next/image";
import MenuButton from "../header/menuButton/MenuButton";

const MainContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    // Set the initial state based on the current window width
    handleResize();

    // Add the event listener for subsequent resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return(
    <div className={styles.container}>
      <div className={styles.mainHeaderClass}><MainHeader/></div>

      <div className={styles.mainContainer}>
        <Image src={'/img/index-img.png'} alt={'photo'}
        width={1107} height={800}
        className={styles.img}/>
        { !isMobile && <Sidebar/> }
        { isMobile && <div className={styles.hamburgerMenu}><MenuButton onClick={toggleMenu}/></div> }
      </div>
    </div>
  )
}

export default MainContent;