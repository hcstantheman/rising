import React, {useEffect, useState} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/branch.module.scss';
import Legend from "../components/branch/Legend";
import Cardholder from "../components/branch/Cardholder";
import ContentProps from "../type/ContentProps";



const Making: React.FC = () => {
  const [cardholderData, setCardholderData] = useState<ContentProps[]>([]);
  useEffect(() => {
    setCardholderData( [
      {
        name: 'まさむね薬局', address: '山口県下関市綾羅木本町2丁目4-22', postcode:'751-0849',
        weekdayLabel: '月～金', weekdayHour:'9:00 ～ 18:30',
        weekendLabel: '土', weekendHour: '9:00 ～ 13:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ["在宅", "相談", "宅配", "駐車場", "ゲネリック"]
      },
      {
        name: 'ホワイト薬局', address: '山口県山口市小郡下郷842-9', postcode:'754-0002',
        weekdayLabel: '月～金', weekdayHour:'8:30 ～ 18:00',
        weekendLabel: '土', weekendHour: '8:30 ～ 17:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子','在宅', '血圧計', '相談', '駐車場', 'トイレ', 'ゲネリック']
      },
      {
        name: '秀英薬局', address: '山口県山口市小郡下郷965', postcode:'754-0002',
        weekdayLabel: '月～金', weekdayHour:'9:00 ～ 18:00',
        weekendLabel: '土', weekendHour: '9:00 ～ 17:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['在宅', '相談', '宅配', '駐車場', 'トイレ', 'ゲネリック']
      },
      // {
      //   name: 'あいお薬局', address: '山口県山口市秋穂東6279', postcode:'754-1101',
      //   weekdayLabel: '月～金', weekdayHour:'9:00 ～ 18:00',
      //   weekendLabel: '土', weekendHour: '9:00 ～ 13:00',
      //   restDay:'日曜日・祝日',
      //   iconsToDisplay: ['車椅子','相談', '宅配', '駐車場', 'トイレ', 'ゲネリック']
      // },
      // {
      //   name: 'ソレイユ薬局', address: '山口県山口市黒川771-13', postcode:'753-0851',
      //   weekdayLabel: '月・火・水・金', weekdayHour:'9:00 ～ 18:30',
      //   weekendLabel: '木', weekendHour: '9:00 ～ 17:00',
      //   restDay:'日曜日・祝日',
      //   iconsToDisplay: ['車椅子','在宅', '相談', 'トイレ', 'ゲネリック']
      // },
      // {
      //   name: 'あいお薬局', address: '山口県山口市秋穂東6279', postcode:'754-1101',
      //   weekdayLabel: '月～金', weekdayHour:'9:00 ～ 18:00',
      //   weekendLabel: '土', weekendHour: '9:00 ～ 13:00',
      //   restDay:'日曜日・祝日',
      //   iconsToDisplay: ['車椅子','相談', '宅配', '駐車場', 'トイレ', 'ゲネリック']
      // },

    ])

    // Fetch data from API
    // fetch('your-api-url')
    //   .then(response => response.json())
    //   .then(data => {
    //     setCardholderData(data); // Assuming 'data' is an array of cardholder data
    //   })
    //   .catch(error => {
    //     // Handle any errors
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return (
    <div>
      <Header text='薬局一覧' />
      <div className={styles.legend}>
        <Legend/>
      </div>
      <div className={styles.cardholderContainer}>
        {cardholderData.map((content, index) => (
          <Cardholder key={index} content={content} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Making;
