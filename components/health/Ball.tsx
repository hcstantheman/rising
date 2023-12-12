import React from 'react';
import styles from './css/ball.module.scss';
import Image from "next/image";

interface Props {
  imageUrl: string;
  width: number;
  height: number;
  text: string;
  subtext?: string;
}
const Question: React.FC<Props> = ({imageUrl, width, height,text, subtext}) => {
  return (
    <div className={styles.ballContainer}>
      <Image
        src={imageUrl} alt={'icon'}
        width={width} height={height}
        className={styles.icon}
      />
      <p className={styles.text}>{text}</p>
      {subtext ? <p className={styles.subtext}>{subtext}</p> : null}
    </div>
  )
}

export default Question;
