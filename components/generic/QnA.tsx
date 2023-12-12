import React from 'react';
import styles from './css/QnA.module.scss';
import Image from "next/image";
import Question from "./Question";


const QnA: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.left}>
          <Image
            src="/img/generic-bg-2.png"
            width={269} height={677}
            alt='background'
          />
          <Image
            src="/img/generic-bg-4.png"
            width={547} height={500}
            alt='background'
            className={styles.leftMiddle}
          />
          <Image
            src="/img/generic-bg-5.png"
            width={690} height={785}
            alt='background'
            className={styles.leftBottom}
          />
        </div>
        <div className={styles.right}>
          <Image
            src="/img/generic-bg-1.png"
            width={556} height={849}
            alt='background'
            className={styles.rightTop}
          />
          <Image
            src="/img/generic-bg-3.png"
            width={278} height={500}
            alt='background'
            className={styles.rightMiddle}
          />
          <Image
            src="/img/generic-bg-6.png"
            width={338} height={542}
            alt='background'
            className={styles.rightBottom1}
          />
          <Image
            src="/img/generic-bg-7.png"
            width={436} height={421}
            alt='background'
            className={styles.rightBottom2}
          />
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
        <div className={styles.questionBox}>
          <div>
          <Question
            question={'ジェネリック医薬品はなぜ安いの？'}
            answer={'ジェネリック医薬品が低価格なのは、開発費用が少なく済むからです。品質は先発医薬品と同等です。'}
          />
          </div>
          <div>
          <Question
            question={'ジェネリック医薬品は安全なの?'}
            answer={'はい、安全です。'}
            secondLine={'ジェネリック医薬品は厚生労働省の品質検査において、先発医薬品と同等の効果が確認されてから発売されていますので、安心してお飲みいただけます。'}
          />
          </div>
          <Question
            question={'ジェネリック医薬品を使用するには?'}
            answer={'ジェネリック医薬品を飲みたい旨を、薬剤師にお伝えください。'}
            secondLine={'医師の判断後、ジェネリック医薬品に変更する事が可能です。'}
          />
        </div>
      </div>
    </div>
  );
};

export default QnA;
