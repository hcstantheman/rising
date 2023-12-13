import React from 'react';
import styles from './css/item.module.scss';

interface Props {
  name: string;
  postcode: string;
  address: string;
  phone: string;
}
const Item:  React.FC<Props> = ({ name,postcode, address, phone}) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.postcode}>{postcode}</p>
      <p className={styles.address}>{address}</p>
      <p className={styles.phone}>{phone}</p>
    </div>
  )
}

export default Item;