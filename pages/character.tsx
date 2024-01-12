import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/character.module.scss';
import CharCard from "../components/character/charCard";
import CharContent from "../components/character/charContent";

const Character: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header text={'ライジンググループの特徴'}/>
        <div className={styles.introBox}>
          <div>
            <p>ライジンググループの調剤薬局は大きな特徴が３つあります。</p>
            <p>具体的には、地元である山口県に地域密着で出店を行っております。
              また、店舗それぞれの個性を尊重しているので、個性豊かな運営が行われています。
              ライジンググループの調剤薬局は、とても風通しの良い職場です。
              気軽に社長に声がかけられる、とよく言われますが、このような風通しの良さが千差万別の個性を活かした運営の基礎となっております。</p>
          </div>
        </div>
      <div className={styles.contentContainer}>
        <CharContent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Character;