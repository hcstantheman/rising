import React from 'react';
import styles from './css/cardholder.module.scss';
import Image from "next/image";

interface Props {
  imageUrl: string;
  firstWord: string;
  paragraph: string;
}
const TitleBox:  React.FC<Props> = ({ imageUrl, firstWord, paragraph}) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageUrl} alt={'img'}
        width={250} height={300}
        className={styles.image}
      />
      <div className={styles.textBox}>
        <p><span className={styles.firstWord}>{firstWord}</span>{paragraph}</p>
      </div>
    </div>
  )
}

export default TitleBox;