import React from 'react';
import styles from './css/reception.module.scss';
import StyleButton from "../common/StyleButton";
import Image from "next/image";

const Reception: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>処方箋の受付は以下よりお願いいたします</p>
      <div className={styles.buttonContainer}>
        <StyleButton text={'LINEはこちら'} to={'/line'} blue={true}/>
        <Image src={'/img/shop-qr.png'} alt={'qr'}
               width={135} height={135} className={styles.qr}/>
      </div>
    </div>
  )
}

export default Reception;