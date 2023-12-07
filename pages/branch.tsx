import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/branch.module.scss';
import Legend from "../components/branch/Legend";

const Making: React.FC = () => {
  return (
    <div>
      <Header text='薬局一覧' />
      <div className={styles.legend}>
        <Legend/>
      </div>
      <Footer />
    </div>
  );
};

export default Making;
