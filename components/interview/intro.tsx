import React from 'react';
import styles from './css/intro.module.scss';
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <p className={styles.title}>患者宅や高齢者施設を訪問し、</p>
        <p className={styles.title}>薬に関することをサポートします！</p>
      </div>
      <div className={styles.contentBox}>
        <Image
          src={'/img/interview-intro.png'} alt={'intro'}
          width={524.66} height={291}
          className={styles.img}
        />
        <p className={styles.content}>
          医師、訪問看護師施設スタッフやケアマネジャーと連携し、患者さまのご自宅や各種高齢者施設を訪問し、
          お薬の正しい飲み方の説明や副作用・相互作用の確認、保管方法の説明などを行うサービスです。
          薬剤師がお薬をお届けするため、患者様は薬局に行かなくてすみます。
        </p>
      </div>
    </div>
  )
}

export default Intro;