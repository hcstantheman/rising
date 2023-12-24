import React from 'react';
import styles from './css/mainHeader.module.scss';
import Image from 'next/image';
import Link from "next/link";

const MainHeader: React.FC = () => {
  return(
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Image src={'/img/logo.png'} alt={'logo'}
        width={291} height={49}
        className={styles.logo}/>
        <div className={styles.optionContainer}>
          <Link href={'/blog'} className={styles.option}> ブログ一覧 </Link>
          <Link href={'/branch'} className={styles.option}>薬局一覧</Link>
          <Link href={'/character'} className={styles.option}> 方針 </Link>
          <Link href={'/line'} className={styles.option}> サービス </Link>
        </div>
      </div>

      <p className={styles.branchTitle}>調剤薬局一覧</p>
    </div>
  )
}

export default MainHeader;