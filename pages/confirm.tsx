import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
//import styles from './css/confirm.module.scss';
import TitleBox from "../components/confirm/TitleBox";


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
      <Footer/>
    </div>
  )
}

export default Confirm;