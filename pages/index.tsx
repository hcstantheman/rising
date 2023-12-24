import React from 'react';
import Background from "../components/index/background";
import MainContent from "../components/index/MainContent";
import styles from './css/index.module.scss';
import IndexLocation from "../components/index/Location";


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Background/>
      <MainContent/>
      <IndexLocation/>
    </div>
  );
};

export default Home;
