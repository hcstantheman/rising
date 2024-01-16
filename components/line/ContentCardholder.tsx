import React from 'react';
import styles from './css/contentCardholder.module.scss';
import MultiLineText from "../../util/MultiLineText";

interface Props {
  heading: string;
  content?: string;
}

const ContentCardholder: React.FC<Props> = ({heading, content}) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <MultiLineText text={heading}/>
      </div>
      { content &&
      <div className={styles.content}>
        <MultiLineText text={content}/>
      </div>
      }
    </div>
  );
}

export default ContentCardholder;