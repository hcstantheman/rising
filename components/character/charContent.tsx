import React from 'react';
import styles from './css/charContent.module.scss';
import Image from 'next/image';
import CharCard from "./charCard";
import {AnimatePresence, motion} from 'framer-motion';

const CharContent: React.FC = () => {
  const animationSettings = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: "easeOut", duration: 2, delay: 0.5 }
  }
  const MotionImage = motion(Image);
  return(
    <AnimatePresence>
    <div className={styles.container}>
      <motion.div {...animationSettings} className={styles.firstCard}>
        <CharCard
          title={'山口県内に店舗数が豊富'}
          line1={'2024年1月現在、山口県内に17店舗を構えております。'}
          line2={'店舗数が豊富で自宅近くの店舗に勤めることができ、転居を伴う転勤もほとんどありません。山口県内にとどまり、慣れ親しんだ地域で働き続けることができるので安心です。'}
        />
      </motion.div>
      <MotionImage
        src="/img/char-img-1.png"
        alt="First Image"
        {...animationSettings}
        className={styles.firstImage}
        width={364}
        height={361}
      />
      <MotionImage
        src="/img/char-img-2.png"
        alt="Second Image"
        {...animationSettings}
        className={styles.secondImage}
        width={256}
        height={248}
      />
      <MotionImage
        src={'/img/char-img-3.png'}
        alt={'Third Image'}
        {...animationSettings}
        className={styles.thirdImage}
        width={616}
        height={400}
      />
      <motion.div {...animationSettings} className={styles.secondCard}>
        <CharCard
          title={'個性豊かな店舗'}
          line1={'調剤薬局といえば「白くて四角い建物で…」と、どこか特徴のない同じような外観の印象があると思います。' +
            'しかしライジンググループの調剤薬局は一味違います。ウッドデッキが備え付けの店舗やステンドグラスで装飾されている店舗など、' +
            '一見すると薬局とは思えないようなおしゃれな外観の建物ばかりです。実際に店舗で働く社員の声を取り入れ、' +
            '店舗ごとの個性を大切にしているのもライジンググループの特長の一つです。'}
        />
      </motion.div>
      <MotionImage
        src={'/img/char-img-4.png'}
        alt={'Fourth Image'}
        {...animationSettings}
        className={styles.fourthImage}
        width={210}
        height={208}
      />
      <motion.div {...animationSettings} className={styles.thirdCard}>
        <CharCard
          title={'風通しの良い職場'}
          line1={'突然、店舗に社長が訪問し、スタッフに「元気か？」と一言。' +
            'スタッフも「あれ、社長どうしたのですか？」と気軽に返し、世間話が始まります。' +
            '社長を含め経営陣が気さくで距離感も近く、自由な意見交換ができます。' +
            '要望を上司に相談すれば「わかった、報告しておく」と、現場の声が経営陣まですぐに届く。' +
            'そんな環境がライジンググループには整っています。'}
        />
      </motion.div>
      <MotionImage
        src={'/img/char-img-5.png'}
        alt={'Fifth Image'}
        {...animationSettings}
        className={styles.fifthImage}
        width={456}
        height={297}
      />
      <MotionImage
        src={'/img/char-img-6.png'}
        alt={'Sixth Image'}
        {...animationSettings}
        className={styles.sixthImage}
        width={177}
        height={177}
      />
    </div>
    </AnimatePresence>
  )
}

export default CharContent;