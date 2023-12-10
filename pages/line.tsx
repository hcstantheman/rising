import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/line.module.scss';
import Merit from "../components/line/merit";

const Line: React.FC = () => {
  return (
    <div>
      <Header text='LINEでの処方箋受付' />
      <div className={styles.intro}>
        <div className={styles.introText}>
          ライジンググループ各店舗のLINE公式アカウントにご登録いただくと、下記のサービスをご利用いただけます。
          感染症予防にも有効なサービスですので、是非ご利用ください。
        </div>
        <div className={styles.introButton}>
          <div className={styles.layer}></div>
          <div className={styles.topLayer}>
            <span className={styles.buttonText}>店舗一覧へ ＞</span>
          </div>
        </div>
      </div>
      <div className={styles.merit}>
        <Merit/>
      </div>
      <Footer />
    </div>
  );
};

export default Line;
