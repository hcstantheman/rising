import React from 'react';
import styles from './css/bar.module.scss';
import Image from "next/image";

interface Props {
  text: string
  secondLine?: string
}

const Bar: React.FC<Props> = ({text, secondLine}) => {
  return (
    <div className={styles.container}>
      <Image
        src={'/img/arrow.svg'} alt={'arrow'}
        className={styles.arrow}
        width={16} height={16}
      />
      <div className={styles.textBox}>
        <p className={styles.text}>{text}</p>
        { secondLine? <p className={styles.text}>{secondLine}</p> : null}
      </div>
    </div>
  );
}

export default Bar;