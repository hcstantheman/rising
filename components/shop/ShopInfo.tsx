import React from 'react';
import styles from './css/shopInfo.module.scss';
import InfoContainer from "./InfoContainer";
import Image from "next/image";

const ShopInfo: React.FC = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.leftContainer}>
        <p className={styles.infoTitle}>基本情報</p>
        <div className={styles.infoText}>
          <InfoContainer
            title={'住所'} firstLine={'郵便番号'}
            secondLine={'山口県下関市綾羅木本町2丁目4-22'}/>
          <InfoContainer
            title={'営業時間'} firstLine={'月〜金　　　9:00-18:30'}
            secondLine={'土　　　　　9:00-18:30'}/>
          <InfoContainer
            title={'定休日'} firstLine={'日曜日・祝日'}/>
        </div>
        <div className={styles.phone}>
          <Image src={'/img/shop-phone.svg'} alt={'phone'}
                  width={33} height={33}/>
          <p>083-973-6977</p>
        </div>
        <div className={styles.landline}>
          <Image src={'/img/shop-landline.svg'} alt={'phone'}
                 width={33} height={33}/>
          <p>083-973-6978</p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <p className={styles.infoTitle}>施設・設備情報</p>
        <div className={styles.upperContainer}>
          <div className={styles.firstLine}>
            <div className={styles.iconContainer}>
              <Image src={'/img/home.png'} alt={'home'}
                     width={20} height={20}
                     className={styles.icon}/>
              <p>在宅あり</p>
            </div>
            <div className={styles.iconContainer}>
              <Image src={'/img/hand.png'} alt={'discussion'}
                     width={20} height={20}
                     className={styles.icon}/>
              <p>おくすり相談</p>
            </div>
            <div className={styles.iconContainer}>
              <Image src={'/img/truck.png'} alt={'delivery'}
                     width={20} height={20}
                     className={styles.icon}/>
              <p>宅配▲</p>
            </div>
          </div>
          <div className={styles.secondLine}>
            <div className={styles.iconContainer}>
              <Image src={'/img/parking.png'} alt={'parking'}
                     width={20} height={20}
                     className={styles.icon}/>
              <p>駐車場あり：２〜３台</p>
            </div>
            <div className={styles.iconContainer}>
              <Image src={'/img/pills.png'} alt={'pills'}
                     width={20} height={20}
                     className={styles.icon}/>
              <p>ジェネリック薬品取扱</p>
            </div>
          </div>
        </div>
        <div className={styles.lowerContainer}>
          <p className={styles.nearbyTitle}>近隣の医療機関</p>
          <p className={styles.nearbyText}>だて整形外科リハビリテーションクリニック</p>
        </div>
      </div>
    </div>
  )
}

export default ShopInfo;