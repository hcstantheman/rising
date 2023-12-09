import React from 'react';
import styles from './css/cardholder.module.scss';
import DottedLine from "../common/DottedLine";

interface ImageInfoProps {
  imageUrl?: string; // imageUrl is now optional
  content: contentProps;
}
interface contentProps {
  name: string;
  postcode: string;
  address: string;
  weekdayLabel: string;
  weekdayHour: string;
  weekendLabel: string;
  weekendHour: string;
  restDay: string;
  iconsToDisplay: string[];
}
type IconMapping = { [key: string]: string };
const iconMapping: IconMapping = {
  '車椅子': 'img/wheelchair.png',
  'クレジットカード': 'img/creditCard.png',
  '在宅': 'img/home.png',
  '血圧計': 'img/heart.png',
  '相談': 'img/hand.png',
  '宅配': 'img/truck.png',
  '駐車場': 'img/parking.png',
  'トイレ': 'img/toilet.png',
  '多目的': 'img/multi.png',
  'ゲネリック': 'img/pills.png'
};

const Cardholder:  React.FC<ImageInfoProps> = ({ imageUrl, content}) => {
  return (
    <div className={styles.cardholderContainer}>
      { imageUrl ?
        <img src={imageUrl} alt="Image" className="image" /> :
        <div className={styles.defaultImage}></div>
      }
      <div className={styles.infoContainer}>
        <p className={styles.name}>{content.name}</p>
        <div className={styles.dottedLine}>
          <DottedLine numDots={38}/>
        </div>
        <div className={styles.addressContainer}>
          <div className={styles.addressLabel}>住所</div>
          <div className={styles.addressContent}>
            <div className={styles.postcode}>〒{content.postcode}</div>
            <div className={styles.additionalAddress}>{content.address}</div>
          </div>
        </div>
        <div className={styles.businessContainer}>
          <div className={styles.businessLabel}>営業時間</div>
          <div className={styles.businessHours}>
            <div className={styles.businessRow}>
              <span className={styles.dayLabel}>月～金</span>
              <span>9:00 ～ 18:30</span>
            </div>
            <div className={styles.businessRow}>
              <span className={styles.dayLabel}>土</span>
              <span>9:00 ～ 13:00</span>
            </div>
          </div>
        </div>
        <div className={styles.restContainer}>
          <div className={styles.restLabel}>休業日</div>
          <p>日曜日・祝日</p>
        </div>
        <div className={styles.iconsContainer}>
          {content.iconsToDisplay.map(iconLabel => (
            <img key={iconLabel} src={iconMapping[iconLabel]} className={styles.iconImage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardholder;
