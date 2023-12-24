import React from 'react';
import Background from "../components/index/background";
import MainContent from "../components/index/MainContent";
import styles from './css/index.module.scss';
import IndexLocation from "../components/index/Location";
import IndexBlog from "../components/index/IndexBlog";


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Background/>
      <MainContent/>
      <IndexBlog/>
      <IndexLocation/>
    </div>
  );
};

export default Home;
