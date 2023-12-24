// IndexLocation.tsx
import React from "react";
import styles from './css/location.module.scss';
import Image from "next/image";
import pinLocations from "../../const/location"

const IndexLocation: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>店舗所在</p>
      <div className={styles.map}>
        <Image src={'/img/index-location-bg.png'} alt={'location-bg'} width={1296} height={828} className={styles.bg}/>
        {pinLocations.map((pin, index) => (
          <div key={index} className={styles.pin} style={{
            position: 'absolute',
            top: `${pin.top * 100}%`,
            left: `${pin.left * 100}%`,
            transform: 'translate(-50%, -50%)' // Adjust if necessary
          }}>
            <Image src={'/img/index-location-inactive.svg'} alt={`${pin.name} location`} width={60} height={60}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexLocation;
