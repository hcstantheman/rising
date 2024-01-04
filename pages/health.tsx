import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/health.module.scss';
import Image from "next/image";
import DottedLine from "../components/common/DottedLine";
import Ball from "../components/health/Ball";

const Health: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.classList.add(styles.greyBackground);
  };

  return (
    <div>
      <Header text='健康サポート薬局' />
      <p className={styles.intro}>
        ライジンググループは地域の方々にとって、もっと身近な存在となる為に『健康サポート薬局』への取組を推進しております。
      </p>
      <div className={styles.explain}>
        <p className={styles.title}>健康サポート薬局とは?</p>
        <div className={styles.dotLine}><DottedLine numDots={57}/></div>
        <div className={styles.explainContent}>
          <Image
            src={'/img/health-explain.png'} alt={'logo'} width={268} height={315}
          />
          <p className={styles.explainText}>
            健康サポート薬局とは、厚生労働大臣が定める一定基準を満たしている薬局として、かかりつけ薬剤師・薬局の機能に加えて、
            市販薬や健康食品に関することはもちろん、介護や食事・栄養摂取に関することまでお気軽に相談できる薬局のことです。
            皆さんの健康をより幅広く、積極的にサポートします。
          </p>
        </div>
      </div>
      <div className={styles.merit}>
        <p className={styles.title}>健康サポート薬局のメリット</p>
        <DottedLine numDots={63}/>
        <div className={styles.grid}>
          <Ball
            imageUrl={'/img/health-ball-1.svg'}
            text={'健康サポートに必要な専門知識を習得した薬剤師が、相談に応じます。'}
            width={70} height={80}
          />
          <Ball
            imageUrl={'/img/health-ball-2.svg'}
            text={'相談内容により、医療機関での受診の提案や、必要に応じて他の医療機関をご紹介します。'}
            width={100} height={80}
          />
          <Ball
            imageUrl={'/img/health-ball-3.svg'}
            text={'専門知識を持った薬剤師が、要指導医薬品や介護用品などの適切な商品選びをお手伝いします。'}
            width={90} height={80}
          />
          <Ball
            imageUrl={'/img/health-ball-4.svg'}
            text={'週末も開局しています。お休みの日も気軽にご相談いただけます。'}
            subtext={'※店舗により曜日・時間は異なります。'}
            width={70} height={80}
          />
          <Ball
            imageUrl={'/img/health-ball-5.svg'}
            text={'プライバシーに配慮した相談スペースを用意しています。'}
            width={100} height={80}
          />
          <Ball
            imageUrl={'/img/health-ball-6.svg'}
            text={'健康相談に関するイベントを開催しており、イベントはどなたでも参加できます。'}
            width={100} height={80}
          />
        </div>
      </div>
      <div className={styles.branch}>
        <p className={styles.title}>ライジンググループの健康サポート薬局</p>
        <div className={styles.dotLine}> <DottedLine numDots={85}/></div>
        <div className={styles.branchContent}>
          <div className={styles.box}>
            <Image
              src={''} alt={'logo'} width={300} height={200} onError={handleImageError}
            />
            <p className={styles.branchTitle}>川棚薬局</p>
          </div>
          <div className={styles.box}>
            <Image
              src={''} alt={'logo'} width={300} height={200} onError={handleImageError}
            />
            <p className={styles.branchTitle}>美秋薬局</p>
          </div>
          <div className={styles.box}>
            <Image
              src={''} alt={'logo'} width={300} height={200} onError={handleImageError}
            />
            <p className={styles.branchTitle}>セレッソ薬局</p>
          </div>
          <div className={styles.box}>
            <Image
              src={''} alt={'logo'} width={300} height={200} onError={handleImageError}
            />
            <p className={styles.branchTitle}>サン薬局</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Health;
