import React from 'react';
import styles from './css/mainContent.module.scss';
import MainHeader from "./MainHeader";

const MainContent: React.FC = () => {
  return(
    <div className={styles.container}>
      <MainHeader/>
    </div>
  )
}

export default MainContent;