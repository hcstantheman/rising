import React from 'react'
import styles from './css/service.module.scss'
import DottedLine from "../common/DottedLine";
import ServiceCardholder from "./serviceCardholder/serviceCardholder";
import Image from "next/image";


const Service = () => {
  return (
    <div className={styles.serviceContainer}>
      <p className={styles.serviceText}>サービスを受けるための手順</p>
      <DottedLine numDots={65}/>
      <div className={styles.meritCardholder}>
        <div className={styles.step1}>
          <Image src={'/img/service-step-1.png'} alt={'phone'}
                 width={193} height={281}
                 className={styles.backgroundIcon}/>
          <div className={styles.mainBox}>
            <p>ご利用店舗のLINE</p>
            <p>アカウントを友だち登録</p>
          </div>
          <div className={styles.subBox}>
            <p>※各店舗の紹介ページにお友だち</p>
            <p>追加ボタン・QRコードを</p>
            <p>掲載しております。</p>
          </div>
          <ServiceCardholder text={"STEP1"} />
        </div>
        <div className={styles.step2}>
          <Image src={'/img/service-step-2.svg'} alt={'med'}
                 width={294} height={280}
                 className={styles.backgroundIcon2}/>
          <div className={styles.mainBox}>
            <p>医療機関より発行された</p>
            <p>処方箋を撮影してLINEで送信</p>
          </div>
          <div className={styles.subBox}>
            <p>※平らな明るい場所で</p>
            <p>処方箋全体が収まるように</p>
            <p>撮影してください</p>
          </div>
          <ServiceCardholder text={"STEP2"} />
        </div>
        <div className={styles.step3}>
          <Image src={'/img/service-step-3.png'} alt={'pill'}
                 width={277} height={215}
                 className={styles.backgroundIcon3}/>
          <div className={styles.mainBox}>
            <p>薬局にて処方箋を確認し、</p>
            <p>お薬をご用意でき次第</p>
            <p>患者様へご連絡</p>
          </div>
          <div className={styles.subBox}>
            <p>※営業時間外にお送りいただいた</p>
            <p>メッセージへの返信は営業時間内と</p>
            <p>なってからの対応となります。。</p>
          </div>
          <ServiceCardholder text={"STEP3"} />
        </div>
        <div className={styles.step4}>
          <Image src={'/img/service-step-4.png'} alt={'home'}
                 width={307} height={246}
                 className={styles.backgroundIcon4}/>
          <div className={styles.mainBox}>
            <p>処方箋の原本を持参して</p>
            <p>来局していただき</p>
            <p>お薬の受け取りとお支払い</p>
          </div>
          <ServiceCardholder text={"STEP4"} />
        </div>
      </div>
    </div>
  );
};

export default Service;
