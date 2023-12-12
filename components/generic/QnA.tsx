import React from 'react';
import styles from './css/QnA.module.scss';
import Image from "next/image";


const QnA: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src="/img/generic-bg-2.png"
          width={269} height={677}
          alt='background'
          className={styles.left}
        />
        <div className={styles.right}>
          <Image
            src="/img/generic-bg-1.png"
            width={556} height={849}
            alt='background'
            className={styles.rightTop}
          />
          <div className={styles.rightBottom}>
            <Image
              src="/img/generic-bg-3.png"
              width={278} height={500}
              alt='background'
              className={styles.rightBottom}
            />
          </div>
        </div>
        <div className={styles.titleBox}>
          <p className={styles.firstLine}>ライジング薬局の</p>
          <p className={styles.secondLine}>ジェネリック医薬品について</p>
        </div>
        <div className={styles.introBox}>
          <p>先発医薬品の開発には、約10年～15年の年月と約150億円以上の莫大な費用が必要といわれています。</p>
          <p>ジェネリック医薬品は先発医薬品の有効性・安全性が確立した後に作られるので開発に要する時間も少なくて済み、費用も先発医薬品より安価に製造することができます。</p>
          <p>健康意識の高まる昨今、生活習慣病などが理由で定期的に薬を飲んでいる人も少なくありません。</p>
          <p>いくら健康維持のために必要とはいえ、毎回の医療費も重なれば高額な出費となってしまいます。</p>
          <p>ジェネリック医薬品は、個人の医療費負担を軽くするだけでなく、国全体の医療費削減にも大きく貢献されることが期待されています。</p>
          <p>ライジンググループでも、患者さまのご希望に添えるよう可能な限りジェネリック医薬品での処方に対応させていただきます。</p>
        </div>
      </div>
    </div>
  );
};

export default QnA;
