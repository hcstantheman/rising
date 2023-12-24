import React from 'react';
import styles from './css/PinHover.module.scss';
import Image from "next/image"; // Ensure you create this SCSS file

interface PinHoverProps {
  name: string;
  address: string;
  image?: string;
}
const PinHover: React.FC<PinHoverProps> = ({ name , image, address}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        { image?
          <Image src={image} alt={'photo'} width={55} height={55} /> :
          <div className={styles.noImage}/>
        }
        <p className={styles.name}>{name}</p>
        <p className={styles.address}>{address}</p>
      </div>
      <Image src={'/img/index-triangle.svg'} alt={'triangle'}
             width={80} height={95} className={styles.triangle}/>
    </div>

  );
}

export default PinHover;
