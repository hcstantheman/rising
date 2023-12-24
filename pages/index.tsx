import React from 'react';
import Background from "../components/index/background";
import MainContent from "../components/index/MainContent";
import styles from './css/index.module.scss';


const Home: React.FC = () => {
  return (
    <div>
      <div className={styles.snapScroll}>
        <Background/>
        <MainContent/>
      </div>
    </div>
  );
};

export default Home;
