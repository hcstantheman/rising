import React from "react";
import styles from "./css/doublePhoto.module.scss";
import Image from "next/image";

interface Props {
  imageUrl: string;
}

const DoublePhoto: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageUrl} alt={'bg'}
        width={710} height={561}
        className={styles.background}
      />
      <Image
        src={imageUrl} alt={'image'}
        width={673} height={402}
        className={styles.photo}
      />
    </div>
  )
}

export default DoublePhoto;