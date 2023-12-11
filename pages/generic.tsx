import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/generic.module.scss';
import Image from "next/image";

const Generic: React.FC = () => {
  return (
    <div>
      <Header text='ジェネリック医薬品' />
      <p className={styles.intro}>
        ジェネリック医薬品は、先発医薬品と同じ有効成分で作られ、「厚生労働省の承認を得て製造・販売」される薬のことです。
        先発医薬品と同じ効果や安全性が確認されてから発売されますが、
        開発にかかる期間が先発医薬品と比べて短い分、かかる費用が安く済むために低価格で提供することができています。
      </p>
      <div className={styles.aboutContainer}>
        <div className={styles.title}>お薬について</div>
        <div className={styles.itemContainer}>
          <div className={styles.firstRow}>
            <Image
              src="/img/generic-arrow-1.svg" alt="arrow" className={styles.arrow1}
              width={98} height={110}
            />
            <div className={styles.item}>
              <p className={styles.itemFirstLine}>医薬品</p>
              <p className={styles.itemSecondLine}>（お薬全般）</p>
            </div>
            <Image
              src="/img/generic-arrow-2.svg" alt="arrow" className={styles.arrow2}
              width={98} height={110}
            />
          </div>
          <div className={styles.secondRow}>
            <div className={styles.longerItem}>
              <p className={styles.itemFirstLine}>一般用医薬品</p>
              <p className={styles.itemSecondLine}>（薬局等で購入できる薬）</p>
            </div>
            <div className={styles.longerItem}>
              <p className={styles.itemFirstLine}>医療用医薬品</p>
              <p className={styles.itemSecondLine}>（医師の診断で処方される薬）</p>
            </div>
          </div>
          <div className={styles.arrowRow}>
            <Image
              src="/img/generic-arrow-3.png" alt="arrow"
              width={494} height={76}
            />
            <Image
              src="/img/generic-arrow-3-1.svg" alt="arrow" className={styles.arrow1}
              width={23} height={76}
            />
          </div>
          <div className={styles.thirdRow}>
            <div className={styles.longerItem}>
              <p className={styles.itemFirstLine}>ジェネリック医薬品</p>
            </div>
            <div className={styles.longerItem}>
              <p className={styles.itemFirstLine}>先発医薬品</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newDrugContainer}>
        <div className={styles.title}>新薬とジェネリック医薬品の成分について</div>
      </div>
      <Footer />
    </div>
  );
};

export default Generic;
