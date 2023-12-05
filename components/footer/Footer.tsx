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
            <div className={styles.address}>電話番号<span className={styles.underline}>083-974-5020</span></div>
            <div className={styles.address}>FAX番号083-974-5021</div>
            <div className={styles.address}>住所〒754-0002 山口県山口市小郡下郷842-9</div>
          </div>

        </div>
        <div className={styles.columnsContainer}>
          <div className={styles.firstColumn}>
            <p className={styles.title}>ライジンググループのお店作り</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>調剤薬局の特徴</li>
              <li className={styles.listItem}>お店作りについて</li>
              <li className={styles.listItem}>健康サポート薬局について</li>
              <li className={styles.listItem}>災害発生時の体制</li>
            </ul>
            <p className={styles.secondTitle}>処方箋受付について</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>インターネットからの処方箋受付</li>
              <li className={styles.listItem}>LINEでの処方箋受付について</li>
            </ul>
          </div>
          <div className={styles.secondColumn}>
            <p className={styles.title}>薬剤師について</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>薬剤師教育について</li>
              <li className={styles.listItem}>薬剤師　在宅訪問</li>
            </ul>
            <p className={styles.secondTitle}>その他</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>BLOG</li>
              <li className={styles.listItem}>ジェネリック医薬品について</li>
              <li className={styles.listItem}>プライバシーポリシー</li>
            </ul>
          </div>
          <div className={styles.thirdColumn}>
            <p className={styles.title}>薬局一覧</p>
            <ul className={styles.doubleList}>
              <li className={styles.listItem}>まさむね薬局</li>
              <li className={styles.listItem}>ホワイト薬局</li>
              <li className={styles.listItem}>秀栄薬局</li>
              <li className={styles.listItem}>あいお薬局</li>
              <li className={styles.listItem}>ソレイユ薬局</li>
              <li className={styles.listItem}>美秋薬局</li>
              <li className={styles.listItem}>セレッソ薬局</li>
              <li className={styles.listItem}>ミント薬局</li>
              <li className={styles.listItem}>厚南薬局</li>
              <li className={styles.listItem}>サン薬局</li>
              <li className={styles.listItem}>ぐうです薬局</li>
              <li className={styles.listItem}>川棚薬局</li>
              <li className={styles.listItem}>関門薬局</li>
              <li className={styles.listItem}>はすの実薬局</li>
            </ul>
          </div>
        </div>

      </div>
      <p className={styles.copyright}>©株式会社ライジングホールディングス</p>
    </div>
  )}

export default Footer;
