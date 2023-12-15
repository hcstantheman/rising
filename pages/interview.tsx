import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/interview.module.scss';
import Intro from "../components/interview/intro";

const Interview: React.FC = () => {
  return (
    <div>
      <Header text={'在宅訪問'}/>
      <div className={styles.container}>
        <div className={styles.intro}>
          <Intro/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Interview;