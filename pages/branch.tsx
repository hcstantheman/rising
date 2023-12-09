import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/branch.module.scss';
import Legend from "../components/branch/Legend";
import Cardholder from "../components/branch/Cardholder";

const Making: React.FC = () => {
  return (
    <div>
      <Header text='薬局一覧' />
      <div className={styles.legend}>
        <Legend/>
      </div>
      <div className={styles.cardholderContainer}>
        <Cardholder content={{
          name: 'まさむね薬局', address: '山口県下関市綾羅木本町2丁目4-22', postcode:'751-0849',
          weekdayLabel: '月～金', weekdayHour:'9:00 ～ 18:30',
          weekendLabel: '土', weekendHour: '9:00 ～ 13:00',
          restDay:'日曜日・祝日',
          'iconsToDisplay': ["在宅", "相談", "宅配", "駐車場", "ゲネリック"] }}/>
      </div>
      <Footer />
    </div>
  );
};

export default Making;
