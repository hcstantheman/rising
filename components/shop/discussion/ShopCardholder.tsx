import React from "react";
import styles from "./css/shopCardholder.module.scss";
import DoublePhoto from "../../common/DoublePhoto";
import Button from "./button";

const ShopCardholder: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <DoublePhoto
          imageUrl={'/img/masamune-2.png'}
        />
        <div className={styles.contentContainer}>
          <Button text={'薬局紹介'}/>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              だて整形外科リハビリテーションクリニックのすぐ裏にある当局は、 平成30年9月に開局したばかりの新しい薬局です。
              薬局内は少し狭いですが、手足や腰などに痛みのある患者様に負担をかけないよう、
              薬局職員が隅々まで気を配り、患者様をお出迎えしております。
              当局の名称の由来でもあります伊達政宗は非常にコミュニケーション能力の高い人物だったそうです。
            </p>
            <p className={styles.text}>
              当局も来局頂いた患者様とのコミュニケーションの中で笑顔と健康をお届けし、
              地域の皆様のご来局をお待ちしております。
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.contentContainer}>
          <Button text={'スタッフ紹介'}/>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              まさむね薬局は薬剤師1名を含めスタッフが全員で3名の薬局です。年齢層は20代～30代と若いですが、
              経験豊富な管理薬剤師が中心となり、患者様の疑問やニーズに全力でお応えいたしますので何でもご質問ください！
            </p>
            <p className={styles.text}>
              また薬局内にある“まさむね君”を見つけると不思議と痛みがなくなるかも？？と言われています。是非見つけてみてくださいね！
            </p>
          </div>
        </div>
        <DoublePhoto
          imageUrl={'/img/masamune-3.png'}
        />
      </div>
      <div className={styles.firstContainer}>
        <DoublePhoto
          imageUrl={'/img/masamune-4.png'}
        />
        <div className={styles.contentContainer}>
          <Button text={'その他の情報'}/>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              薬局の近くはJRの駅のほか、ゆめシティやベスト電器などの商業施設が密集しており、とても便利な場所です。
              飲食店も多いですが、道路を挟んですぐ目の前にある「浜寿司」は特に美味しいと有名ですよ☆来局ついでに是非ご賞味ください！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCardholder;