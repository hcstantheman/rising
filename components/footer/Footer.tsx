import React from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";
import FooterLinkList from './FooterLinkList';

const Footer = () => {
  const shopCreationLinks = [
    { name: '調剤薬局の特徴', href: '/character' },
    { name: 'お店作りについて', href: '/making' },
    { name: '健康サポート薬局について', href: '/health' },
    { name: '災害発生時の体制', href: '/confirm' },
  ]
  const medLinks = [
    { name: 'インターネットからの処方箋受付', href: '/' },
    { name: 'LINEでの処方箋受付について', href: '/line' },
  ]
  const pharmacistLinks = [
    { name: '薬剤師教育について', href: '/making' },
    { name: '薬剤師　在宅訪問', href: '/interview' },
  ]
  const otherLinks = [
    { name: 'BLOG', href: '/blog' },
    { name: 'ジェネリック医薬品について', href: '/generic' },
    { name: 'プライバシーポリシー', href: '/' },
  ]

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
            <FooterLinkList title="ライジンググループのお店作り" links={shopCreationLinks} />
            <div className={styles.space}/>
            <FooterLinkList title="処方箋受付について" links={medLinks} />
          </div>
          <div className={styles.secondColumn}>
            <FooterLinkList title="薬剤師について" links={pharmacistLinks} />
            <div className={styles.space}/>
            <FooterLinkList title="その他" links={otherLinks} />
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
