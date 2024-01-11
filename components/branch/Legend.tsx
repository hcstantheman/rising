import React from 'react';
import styles from './css/legend.module.scss';
import DottedLine from "../common/DottedLine";
import SingleLegend from "./SingleLegend";

const Legend: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>マークについてのご説明</p>
      <DottedLine numDots={35}/>
      <div className={styles.iconsContainer}>
        <div className={styles.firstRow}>
          <SingleLegend iconSrc={'/img/wheelchair.png'} text={'車椅子可'}/>
          <SingleLegend iconSrc={'/img/creditCard.png'} text={'クレジットカード利用可能'}/>
          <SingleLegend iconSrc={'/img/home.png'} text={'在宅あり'}/>
          <SingleLegend iconSrc={'/img/heart.png'} text={'血圧計あり'}/>
          <SingleLegend iconSrc={'/img/hand.png'} text={'おくすり相談'}/>
          <SingleLegend iconSrc={'/img/truck.png'} text={'宅配あり'}/>
        </div>
        <div className={styles.secondRow}>
          <SingleLegend iconSrc={'/img/parking.png'} text={'駐車場あり：２〜３台'}/>
          <SingleLegend iconSrc={'/img/toilet.png'} text={'トイレあり'}/>
          <SingleLegend iconSrc={'/img/multi.png'} text={'多目的トイレあり'}/>
          <SingleLegend iconSrc={'/img/pills.png'} text={'ジェネリック薬品取扱'}/>
        </div>
      </div>
    </div>
  );
};

export default Legend;
