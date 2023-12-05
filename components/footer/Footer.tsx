import React from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoAddressContainer}>
          <Image
            src='/img/logo.png'
            alt="logo"
            width={320}
            height={54}
            className={styles.icon}
          />
          <div className={styles.addressContainer}>
            <div className={styles.name}>株式会社ライジングホールディングス</div>
            <div className={styles.address}>電話番号083-974-5020</div>
            <div className={styles.address}>FAX番号083-974-5021</div>
            <div className={styles.address}>住所〒754-0002 山口県山口市小郡下郷842-9</div>
          </div>
        </div>
      </div>
    </div>
  )}

export default Footer;
