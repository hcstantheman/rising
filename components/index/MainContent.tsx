import React from 'react';
import styles from './css/mainContent.module.scss';
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
import Image from "next/image";

const MainContent: React.FC = () => {
  return(
    <div className={styles.container}>
      <MainHeader/>
      <div className={styles.mainContainer}>
        <Image src={'/img/index-img.png'} alt={'photo'}
        width={1107} height={800}
        className={styles.img}/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default MainContent;