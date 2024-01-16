import React from "react";
import styles from "./css/discussion.module.scss";
import DoublePhoto from "../../common/DoublePhoto";
import Button from "./button";
import Bar from "./bar";

const Discussion: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>こんな時にご相談ください</p>
      </div>
      <div className={styles.firstContainer}>
        <DoublePhoto
          imageUrl={'/img/interview-discussion-1.png'}
        />
        <div className={styles.contentContainer}>
          <Button text={'患者様'}/>
          <div className={styles.barContainer}>
            <Bar text={'薬局に行くのが大変'}/>
            <Bar text={'お薬を飲み忘れてしまう'}/>
            <Bar text={'病気や薬の服用について不安がある'}/>
            <Bar text={'薬の飲み合わせがきになる'}/>
          </div>
          <p className={styles.text}>
            株式会社ライジングでは医師、訪問看護師施設スタッフやケアマネジャーと連携し、
            患者様のご自宅や各種高齢者施設を訪問、お薬のお渡しを通して、
            薬剤管理、お薬に関するご説明や相談に応じています。
          </p>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.contentContainer}>
          <Button text={'医療・介護従事者様'} longer={true}/>
          <div className={styles.barContainer}>
            <Bar text={'療養中の家族や入居者の代わりに'} secondLine={'お薬を取りに行く時間がない'}/>
            <Bar text={'患者宅に訪問したけど必要な医療材料が'} secondLine={'揃っていない'}/>
            <Bar text={'医療材料や麻薬などのデッドストックが'} secondLine={'気になる'}/>
            <Bar text={'他科受診で服薬の数が多くて管理が大変'}/>
          </div>
          <p className={styles.text}>
            通院が困難な患者様に対し医師の指示のもと医療・介護保険制度を利用して患者宅へ訪問して、
            薬の説明や管理、飲み方の指導などを行います。
          </p>
        </div>
        <div className={styles.photo}>
          <DoublePhoto
            imageUrl={'/img/interview-discussion-2.png'}
          />
        </div>
      </div>
    </div>
  );
}

export default Discussion;