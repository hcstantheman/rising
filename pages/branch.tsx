import React, {useEffect, useState} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/branch.module.scss';
import Legend from "../components/branch/Legend";
import Cardholder from "../components/branch/Cardholder";
import ContentProps from "../type/ContentProps";
import branchData from "../const/info";



const Branch: React.FC = () => {
  const [cardholderData, setCardholderData] = useState<ContentProps[]>([]);
  useEffect(() => {
    setCardholderData(branchData)
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

export default Branch;
