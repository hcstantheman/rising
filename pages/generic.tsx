import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/generic.module.scss';
import QnA from "../components/generic/QnA";
import About from "../components/generic/About";

const Generic: React.FC = () => {
  return (
    <div>
      <Header text='ジェネリック医薬品' />
      <p className={styles.intro}>
        ジェネリック医薬品は、先発医薬品と同じ有効成分で作られ、「厚生労働省の承認を得て製造・販売」される薬のことです。
        先発医薬品と同じ効果や安全性が確認されてから発売されますが、
        開発にかかる期間が先発医薬品と比べて短い分、かかる費用が安く済むために低価格で提供することができています。
      </p>
      <About/>
      <div className={styles.second}>
        <QnA/>
      </div>
      <Footer />
    </div>
  );
};

export default Generic;
