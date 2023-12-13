import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/confirm.module.scss';
import TitleBox from "../components/confirm/TitleBox";
import Cardholder from "../components/confirm/Cardholder";
import DottedLine from "../components/common/DottedLine";


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
        <DottedLine numDots={81} vertical={true}/>
        <Cardholder
          imageUrl={'/img/confirm-card-2.png'}
          firstWord={'都'} paragraph={'道府県等の行政機関、地域の医療機関もしくは薬局または関係団体等と適切に連携するため、災害や新興感染症の発生時等における対応に係る地域の協議会または研修等に積極的に参加いたします。'}
        />
        <DottedLine numDots={81} vertical={true}/>
        <Cardholder
          imageUrl={'/img/confirm-card-3.png'}
          firstWord={'災'} paragraph={'害や新興感染症の発生時等に、都道府県から医薬品の供給等について協力の要請があった場合には、地域の関係　機関と連携し、必要な対応を行います。'}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default Confirm;