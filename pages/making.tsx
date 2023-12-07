import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/making.module.scss';
import MakingRowOne from "../components/making/MakingRowOne";
import MakingRowTwo from "../components/making/MakingRowTwo";
import MakingRowThree from "../components/making/MakingRowThree";

const Making: React.FC = () => {
  return (
    <div>
      <Header text='ライジンググループのお店作り' />
        <div className={styles.makingContainer}>
          <div className={styles.box}>
            <div className={styles.innerBox}>
              <p>一人ひとりの笑顔のために、そして老後の生活を安心して送れるように。</p>
              <p>日本全国へ、そして世界へ。すべてはその土地柄に合わせた地域密着から始まります。</p>
            </div>
          </div>
          <div className={styles.rowsContainer}>
            <MakingRowOne/>
            <div className={styles.secondRow}>
              <MakingRowTwo/>
            </div>
            <div className={styles.thirdRow}>
              <MakingRowThree/>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Making;
