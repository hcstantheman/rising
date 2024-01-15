import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/confirm.module.scss';
import TitleBox from "../components/confirm/TitleBox";
import Cardholder from "../components/confirm/Cardholder";
import DottedLine from "../components/common/DottedLine";
import Item from "../components/confirm/Item";


const Confirm: React.FC = () => {
  return (
    <div>
      <Header text={'体制確保'}/>
        <TitleBox
          title={'災害対策チームの編成'}
          content={'弊社では、近隣地区で有事が発生した場合、速やかに災害対策チームを編成し、復旧への一助となるよう積極的にサポートいたします。'}
        />
      <TitleBox
        title={'災害や新興感染症発生時等における薬局の体制確保'}
        content={'弊社では災害や新興感染症等の発生時に地区の行政や薬剤師会、他の保険薬局等との連携により非常時に必要な対応が可能な体制を確保しています。'}
      />
      <div className={styles.cardContainer}>
        <Cardholder
          imageUrl={'/img/confirm-card-1.png'}
          firstWord={'災'} paragraph={'害や新興感染症の発生時等に、医薬品の供給や地域の衛生管理に係る対応等を行う体制を確保します。'}
        />
        <div className={styles.dottedLine}><DottedLine numDots={81} vertical={true}/></div>
        <Cardholder
          imageUrl={'/img/confirm-card-2.png'}
          firstWord={'都'} paragraph={'道府県等の行政機関、地域の医療機関もしくは薬局または関係団体等と適切に連携するため、災害や新興感染症の発生時等における対応に係る地域の協議会または研修等に積極的に参加いたします。'}
        />
        <div className={styles.dottedLine}><DottedLine numDots={81} vertical={true}/></div>
        <Cardholder
          imageUrl={'/img/confirm-card-3.png'}
          firstWord={'災'} paragraph={'害や新興感染症の発生時等に、都道府県から医薬品の供給等について協力の要請があった場合には、地域の関係　機関と連携し、必要な対応を行います。'}
        />
      </div>
      <div className={styles.list}>
        <div className={styles.listContainer}>
          <p className={styles.listTitle}>対象店舗一覧</p>
          <div className={styles.listItem}>
            <Item name={'まさむね薬局'} postcode={'〒751-0849'} address={'山口県下関市綾羅木本町2丁目4-22'} phone={'083-249-5997'}/>
            <Item name={'ホワイト薬局'} postcode={'〒754-0002'} address={'山口県山口市小郡下郷842-9'} phone={'083-973-6663'}/>
            <Item name={'秀英薬局'} postcode={'〒754-0002'} address={'山口県山口市小郡下郷965'} phone={'083-973-6977'}/>
            <Item name={'あいお薬局'} postcode={'〒754-1101'} address={'山口県山口市秋穂東6279'} phone={'083-984-0155'}/>
            <Item name={'ソレイユ薬局'} postcode={'〒753-0851'} address={'山口県山口市黒川771-13'} phone={'083-941-6416'}/>
            <Item name={'美秋薬局'} postcode={'〒754-0211'} address={'山口県美祢市美東町大田3810-14'} phone={'083-962-1711'}/>
            <Item name={'セレッソ薬局'} postcode={'〒759-2212'} address={'山口県美祢市大嶺町東分322番2'} phone={'083-752-1344'}/>
            <Item name={'ミント薬局'} postcode={'〒744-0018'} address={'山口県下松市西柳三丁目1番12号'} phone={'083-348-0091'}/>
            <Item name={'厚南薬局'} postcode={'〒759-0204'} address={'山口県宇部市大字妻崎開作110-1'} phone={'083-645-3573'}/>
            <Item name={'サン薬局'} postcode={'〒755-0155'} address={'山口県宇部市今村北5丁目12番1号'} phone={'083-654-4570'}/>
            <Item name={'ぐうです薬局'} postcode={'〒755-0151'} address={'山口県宇部市大字西岐波323番'} phone={'083-651-2220'}/>
            <Item name={'川棚薬局'} postcode={'〒759-6301'} address={'山口県下関市豊浦町大字川棚7287-1'} phone={'083-772-4647'}/>
            <Item name={'関門薬局'} postcode={'〒752-0985'} address={'山口県下関市長府外浦町2-20'} phone={'083-241-0222'}/>
            <Item name={'はすの実薬局'} postcode={'〒750-1153'} address={'山口県下関市清末鞍馬3丁目5番12-2号'} phone={'083-227-2133'}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Confirm;