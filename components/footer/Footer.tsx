import React from 'react';
import styles from './css/Footer.module.scss';
import Image from "next/image";
import LinkHolder from './LinkHolder';
import {branchLinks, medLinks, otherLinks, pharmacistLinks, shopCreationLinks} from "../../const/footerLink";
import Links from "./Links";

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
            <div className={styles.address}>電話番号<span className={styles.underline}>083-974-5020</span></div>
            <div className={styles.address}>FAX番号083-974-5021</div>
            <div className={styles.address}>住所〒754-0002 山口県山口市小郡下郷842-9</div>
          </div>
        </div>
        <Links/>
      </div>
      <p className={styles.copyright}>©株式会社ライジングホールディングス</p>
    </div>
  )}

export default Footer;
