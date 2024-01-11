// FooterLinkList.jsx
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

interface Props {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
  twoColumn?: boolean;
}

const FooterLinkList: React.FC<Props> = ({ title, links, twoColumn}) => {
  return (
    <div className={styles.linkSection}>
      <p className={styles.title}>{title}</p>
      { !twoColumn?
        <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.listItem}>
            <Link href={link.href} className={styles.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
        :
        <ul className={styles.doubleList}>
          {links.map((link, index) => (
            <li key={index} className={styles.listItem}>
              <Link href={link.href} className={styles.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default FooterLinkList;
