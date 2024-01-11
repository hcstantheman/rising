import React, {useState} from "react";
import styles from './css/location.module.scss';
import Image from "next/image";
import pinLocations from "../../const/location"
import PinHover from "./PinHover";

const IndexLocation: React.FC = () => {
  const [hoveredPin, setHoveredPin] = useState(null);
  return (
    <div className={styles.container}>
      <p className={styles.title}>店舗所在</p>
      <div className={styles.map}>
        <Image src={'/img/index-location-bg.png'} alt={'location-bg'} width={1296} height={828} className={styles.bg}/>
        {pinLocations.map((pin, index) => (
          <div
            key={index}
            className={`${styles.pin} ${hoveredPin === index ? styles.hovered : ''}`}
            style={{top: `${pin.top * 100}%`, left: `${pin.left * 100}%`}}
            //@ts-ignore
            onMouseEnter={() => setHoveredPin(index)}
            onMouseLeave={() => setHoveredPin(null)}
            //@ts-ignore
            onClick={() => setHoveredPin(index)}
          >
            <Image
              src={hoveredPin === index ? '/img/index-location-active.svg' : '/img/index-location-inactive.svg'}
              alt={`${pin.name} location`}
              width={55}
              height={55}
              className={styles.pinImg}
            />
            {hoveredPin === index && <PinHover name={pin.name} address={pin.address}/>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexLocation;
