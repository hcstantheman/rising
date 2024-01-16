import React from 'react';
import Image from 'next/image';
import styles from './serviceCardholder.module.scss';

interface MyComponentProps {
  step: string;
  bgUrl: string;
  width: number;
  height: number;
}

const ServiceCardholder: React.FC<MyComponentProps> = ({ step, bgUrl, width, height}) => {
  return (
    <div className={styles.container}>
      <p className={styles.step}>{step}</p>
      <Image src={bgUrl} alt={'bg'}
             width={width} height={height}
             className={styles.backgroundIcon}/>
    </div>
  );
};

export default ServiceCardholder;
