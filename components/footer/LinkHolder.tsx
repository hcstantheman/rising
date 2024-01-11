import React, {useState} from 'react';
import Link from 'next/link';
import styles from './css/LinkHolder.module.scss';

interface Props {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
  twoColumn?: boolean;
}

const LinkHolder: React.FC<Props> = ({ title, links, twoColumn}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const baseListClassName = twoColumn ? styles.doubleList : styles.list;
  const finalListClassName = isOpen ? styles.listOpen : baseListClassName;

  return (
    <div className={styles.container}>
      <p className={styles.title} onClick={toggleDropdown}>{title}</p>
      <ul className={finalListClassName}>
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

export default LinkHolder;
