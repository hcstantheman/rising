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
}

const FooterLinkList: React.FC<Props> = ({ title, links }) => {
  return (
    <div className={styles.linkSection}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.listItem}>
            <Link href={link.href} className={styles.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
