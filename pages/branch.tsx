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
        iconsToDisplay: ['車椅子', '在宅', '血圧計', '相談', '駐車場', 'トイレ', 'ゲネリック']
      },
      {
        name: '秀英薬局', address: '山口県山口市小郡下郷965', postcode:'754-0002',
        weekdayLabel: '月～金', weekdayHour:'9:00 ～ 18:00',
        weekendLabel: '土', weekendHour: '9:00 ～ 17:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['在宅', '相談', '宅配', '駐車場', 'トイレ', 'ゲネリック']
      },
      {
        name: 'あいお薬局', address: '山口県山口市秋穂東6279', postcode:'754-1101',
        weekdayLabel: '月～金', weekdayHour:'9:00 ～ 18:00',
        weekendLabel: '土', weekendHour: '9:00 ～ 13:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子','相談', '宅配', '駐車場', 'トイレ', 'ゲネリック']
      },
      {
        name: 'ソレイユ薬局', address: '山口県山口市黒川771-13', postcode:'753-0851',
        weekdayLabel: '月・火・水・金', weekdayHour:'9:00 ～ 18:30',
        weekendLabel: '木', weekendHour: '9:00 ～ 17:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子','在宅', '相談', 'トイレ', 'ゲネリック']
      },
      {
        name: '美秋薬局', address: '山口県美祢市美東町大田 3810-14', postcode:'754-0211',
        weekdayLabel: '月～金', weekdayHour:'8:30 ～ 17:30',
        weekendLabel: '日', weekendHour: '8:30 ～ 12:30',
        restDay:'土曜日・祝日',
        iconsToDisplay: ['車椅子', '在宅', '血圧計', '相談', '駐車場', 'トイレ', 'ゲネリック']
      },
      {
        name: 'セレッソ薬局', address: '山口県美祢市大嶺町東分322番2-14', postcode:'759-2212',
        weekdayLabel: '月～金', weekdayHour:'8:20 ～ 18:00',
        weekendLabel: '土', weekendHour: '8:20 ～ 12:30',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子', '在宅', '相談', '宅配', '駐車場', 'トイレ', 'ゲネリック']
      },
      {
        name: 'ミント薬局', address: '山口県下松市西柳三丁目1番12号', postcode:'744-0018',
        weekdayLabel: '月～土', weekdayHour:'9:00 ～ 18:00',
        weekendLabel: 'あいう', weekendHour: 'あいう',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子', '在宅', '相談', '宅配', '駐車場', 'トイレ', '多目的', 'ゲネリック']
      },
      {
        name: '厚南薬局', address: '山口県宇部市大字妻崎開作110-1', postcode:'759-0204',
        weekdayLabel: '月～金', weekdayHour:'8:00 ～ 17:30',
        weekendLabel: '土', weekendHour: '8:30 ～ 15:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子', 'クレジットカード', '血圧計', '相談', '宅配', '駐車場', 'トイレ', 'ゲネリック']
      },
      {
        name: 'サン薬局', address: '山口県宇部市今村北5丁目12番1号', postcode:'755-0155',
        weekdayLabel: '月～金', weekdayHour:'8:30 ～ 17:30',
        weekendLabel: '土', weekendHour: '8:30 ～ 13:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子', '在宅', '相談', '宅配', '駐車場', 'トイレ', '多目的', 'ゲネリック']
      },
      {
        name: 'ぐうです薬局', address: '山口県宇部市大字西岐波323番', postcode:'755-0151',
        weekdayLabel: '月～金', weekdayHour:'8:45 ～ 18:00',
        weekendLabel: '土', weekendHour: '8:45 ～ 13:00',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子', '在宅', '相談', '宅配', '駐車場', 'トイレ', '多目的', 'ゲネリック']
      },
      {
        name: '川棚薬局', address: '山口県下関市豊浦町大字川棚7287-1', postcode:'759-6301',
        weekdayLabel: '月～金', weekdayHour:'8:30 ～ 18:00',
        weekendLabel: '土', weekendHour: '8:30 ～ 12:30',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子', '在宅', '血圧計', '相談', '宅配', '駐車場', 'トイレ', '多目的', 'ゲネリック']
      },
      {
        name: '関門薬局', address: '山口県下関市長府外浦町2-20', postcode:'752-0985',
        weekdayLabel: '月～金', weekdayHour:'8:30 ～ 17:30',
        weekendLabel: '土', weekendHour: '8:30 ～ 12:30',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子', 'クレジットカード', '血圧計', '相談', '駐車場', 'トイレ', '多目的', 'ゲネリック']
      },
      {
        name: 'はすの実薬局', address: '山口県下関市清末鞍馬3丁目5番12-2号', postcode:'750-1153',
        weekdayLabel: '月～金', weekdayHour:'8:50 ～ 18:00',
        weekendLabel: '土', weekendHour: '8:50 ～ 12:30',
        restDay:'日曜日・祝日',
        iconsToDisplay: ['車椅子', '在宅', '相談', '駐車場', 'トイレ', 'ゲネリック']
      },

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
