import React from 'react'
import styles from './css/service.module.scss'
import DottedLine from "../common/DottedLine";
import ServiceCardholder from "./serviceCardholder/serviceCardholder";
import ContentCardholder from "./ContentCardholder";


const Service = () => {
  return (
    <div className={styles.serviceContainer}>
      <p className={styles.serviceText}>サービスを受けるための手順</p>
      <DottedLine numDots={65}/>
      <div className={styles.meritCardholder}>
        <div className={styles.step}>
          <div className={styles.contentContainer}>
            <ContentCardholder
              heading={"ご利用店舗のLINE\nアカウントを友だち登録"}
              content={"※各店舗の紹介ページにお友だち\n追加ボタン・QRコードを\n掲載しております。"}/>
          </div>
          <ServiceCardholder step={"STEP1"} bgUrl={'/img/service-step-1.png'} width={193} height={281}/>
        </div>
        <div className={styles.step}>
          <div className={styles.contentContainer}>
            <ContentCardholder
              heading={"医療機関より発行された\n処方箋を撮影してLINEで送信"}
              content={"※平らな明るい場所で\n処方箋全体が収まるように\n撮影してください"}/>
          </div>
          <ServiceCardholder step={"STEP2"} bgUrl={'/img/service-step-2.svg'} width={294} height={280}/>
        </div>
        <div className={styles.step}>
          <div className={styles.contentContainer}>
            <ContentCardholder
              heading={"薬局にて処方箋を確認し、\nお薬をご用意でき次第\n患者様へご連絡"}
              content={"※営業時間外にお送りいただいた\nメッセージへの返信は営業時間内と\nなってからの対応となります。。"}
            />
          </div>
          <ServiceCardholder step={"STEP3"} bgUrl={"/img/service-step-3.png"} width={277} height={215}/>
        </div>
        <div className={styles.step}>
          <div className={styles.contentContainer}>
            <ContentCardholder
              heading={"処方箋の原本を持参して\n来局していただき\nお薬の受け取りとお支払い"}
            />
          </div>
          <ServiceCardholder step={"STEP4"} bgUrl={'/img/service-step-4.png'} width={307} height={246}/>
        </div>
      </div>
    </div>
  )
}

export default Service;
