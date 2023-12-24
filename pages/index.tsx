import React from 'react';
import Background from "../components/index/background";
import MainContent from "../components/index/MainContent";
import styles from './css/index.module.scss';
import IndexBlog from "../components/index/IndexBlog";


const Home: React.FC = () => {
  return (
    <div>
      <div className={styles.snapScroll}>
        <Background/>
        <MainContent/>
      </div>
      <IndexBlog/>
    </div>
  );
};

export default Home;
