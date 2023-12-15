import React from 'react';
import styles from './css/cardholder.module.scss';

interface Props{
  titleFirstLine: string;
  titleSecondLine: string;
  content: string;
}
const ContentCardHolder: React.FC<Props> = ({titleFirstLine, titleSecondLine, content}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{titleFirstLine}</p>
        <p className={styles.title}>{titleSecondLine}</p>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  )
}

export default ContentCardHolder;