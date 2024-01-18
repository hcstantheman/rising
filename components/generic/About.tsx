import React from 'react';
import styles from './css/about.module.scss';
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.title}>お薬について</div>
        <div className={styles.itemContainer}>
          <div className={styles.firstRow}>
            <Image
              src="/img/generic-arrow-1.svg" alt="arrow" className={styles.arrow1}
              width={98} height={110}
            />
            <div className={styles.item}>
              <p className={styles.itemFirstLine}>医薬品</p>
              <p className={styles.itemSecondLine}>（お薬全般）</p>
            </div>
            <Image
              src="/img/generic-arrow-2.svg" alt="arrow" className={styles.arrow2}
              width={98} height={110}
            />
          </div>
          <div className={styles.secondRow}>
            <div className={styles.longerItem}>
              <p className={styles.itemFirstLine}>一般用医薬品</p>
              <p className={styles.itemSecondLine}>（薬局等で購入できる薬）</p>
            </div>
            <div className={styles.longerItem}>
              <p className={styles.itemFirstLine}>医療用医薬品</p>
              <p className={styles.itemSecondLine}>（医師の診断で処方される薬）</p>
            </div>
          </div>
          <div className={styles.arrowRow}>
            <Image
              src="/img/generic-arrow-3.png" alt="arrow"
              width={494} height={76}
            />
            <Image
              src="/img/generic-arrow-3-1.svg" alt="arrow" className={styles.arrow1}
              width={23} height={76}
            />
          </div>
          <div className={styles.thirdRow}>
            <div className={styles.longerItem}>
              <p className={styles.itemFirstLine}>ジェネリック医薬品</p>
            </div>
            <div className={styles.longerItem}>
              <p className={styles.itemFirstLine}>先発医薬品</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newDrugContainer}>
        <div className={styles.title}>新薬とジェネリック医薬品の成分について</div>
        <p className={styles.contentTitle}>同じ成分</p>
        <div className={styles.firstRow}>
          <div className={styles.circle}>
            <p>先発医薬品</p>
          </div>
          <Image
            src="/img/generic-arrow-4.svg"
            width={140} height={10}
            alt="arrow"/>
          <div className={styles.shorterItem}>
            <p className={styles.itemFirstLine}>主薬</p>
            <p className={styles.itemSecondLine}>薬の主成分</p>
          </div>
          <Image
            src="/img/generic-arrow-4.svg"
            width={140} height={10}
            alt="arrow" className={styles.arrow5}/>
          <div className={styles.circle}>
          </div>
        </div>
        <div className={styles.secondRow}>
          <Image
            src="/img/generic-arrow-5.png"
            width={320} height={168}
            alt="arrow"
            className={styles.leftArrow}/>
          <p>異なっていても良い成分</p>
          <Image
            src="/img/generic-arrow-5.png"
            width={320} height={168}
            alt="arrow" className={styles.rightArrow}/>
        </div>
        <div className={styles.giantItem}>
          <div className={styles.textContainer}>
            <div className={styles.textbox}>
              <div className={styles.firstLine}>結合剤</div>
              <div className={styles.secondLine}>硬さ・形状を保つ</div>
            </div>
            <div className={styles.textbox}>
              <div className={styles.firstLine}>崩壊剤</div>
              <div className={styles.secondLine}>崩壊を促進する</div>
            </div>
            <div className={styles.textbox}>
              <div className={styles.firstLine}>賊形剤</div>
              <div className={styles.secondLine}>大きさ・質量を与える</div>
            </div>
            <div className={styles.textbox}>
              <div className={styles.firstLine}>潤沢剤</div>
              <div className={styles.secondLine}>圧縮伝達性を良くする</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;