import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from './css/shop.module.scss';
import Image from "next/image";
import ShopInfo from "../components/shop/ShopInfo";
import Reception from "../components/shop/Reception";
import ShopCardholder from "../components/shop/discussion/ShopCardholder";
import ShopBlog from "../components/shop/ShopBlog";

const Shop: React.FC = () => {
  return(
    <div>
      <Header text={'まさむね薬局'}/>
      <Image src={'/img/masamune-1.png'} alt={'masamune'} width={1440} height={898}
        className={styles.titleImage}/>
      <div className={styles.infoContainer}><ShopInfo/></div>
      <div className={styles.receptionContainer}><Reception/></div>
      <div className={styles.cardContainer}><ShopCardholder/></div>
      <div className={styles.blogContainer}><ShopBlog/></div>
      <Footer/>
    </div>
  )
}

export default Shop;