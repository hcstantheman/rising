import React from 'react';
import styles from './css/titleBox.module.scss';

interface Props {
  title: string;
  content: string;
}
const TitleBox:  React.FC<Props> = ({ title, content}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}> {title}</p>
      <div className={styles.box}>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  )
}

export default TitleBox;