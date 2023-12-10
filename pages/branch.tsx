import React, {useEffect, useState} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/branch.module.scss';
import Legend from "../components/branch/Legend";
import Cardholder from "../components/branch/Cardholder";
import ContentProps from "../type/ContentProps";
import branchData from "../const/info";



const Making: React.FC = () => {
  const [cardholderData, setCardholderData] = useState<ContentProps[]>([]);
  useEffect(() => {
    setCardholderData(branchData)

    // Fetch data from API
    // fetch('your-api-url')
    //   .then(response => response.json())
    //   .then(data => {
    //     setCardholderData(data); // Assuming 'data' is an array of cardholder data
    //   })
    //   .catch(error => {
    //     // Handle any errors
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return (
    <div>
      <Header text='薬局一覧' />
      <div className={styles.legend}>
        <Legend/>
      </div>
      <div className={styles.cardholderContainer}>
        {cardholderData.map((content, index) => (
          <Cardholder key={index} content={content} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Making;
