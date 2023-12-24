import React from 'react';
import styles from './css/background.module.scss';
import Image from 'next/image';

const Background: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgContainer}>
        <Image
          src={'/img/index-bg.png'} alt={'background'}
          width={1268} height={843}
          className={styles.background}
          />
        <Image
          src="/img/logo-white.png" alt="Logo"
          width={200} height={200}
          className={styles.logo} />
      </div>
    </div>
  )

}

export default Background;