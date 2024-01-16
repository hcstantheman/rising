import React from 'react';
import styles from './css/content.module.scss';
import DottedLine from "../../common/DottedLine";
import ContentCardHolder from "./cardholder";

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>在宅訪問のサポート内容</p>
      <DottedLine numDots={54}/>
      <div className={styles.cardContainer}>
        <ContentCardHolder
          titleFirstLine={'お薬のお届け・説明'}
          titleSecondLine={'残薬の確認'}
          content={'薬剤師が処方箋をもとに準備したお薬をご自宅にお届けします。その際、お薬の説明や残薬の確認をいたします。'}
        />
        <ContentCardHolder
          titleFirstLine={'複数のお薬の整理'}
          titleSecondLine={'一包化'}
          content={'複数の医療機関からの薬を飲みやすいよう一袋に包装する「一包化」や「お薬カレンダー」を使用し、整理します。飲み忘れや飲み間違いを防止します。'}
        />
        <ContentCardHolder
          titleFirstLine={'飲み合わせの確認'}
          titleSecondLine={'お薬に関する相談'}
          content={'複数の医療機関からの薬を飲みやすいよう一袋に包装する「一包化」や「お薬カレンダー」を使用し、整理します。飲み忘れや飲み間違いを防止します。'}
        />
        <ContentCardHolder
          titleFirstLine={'お薬に関するご提案'}
          titleSecondLine={'副作用チェック'}
          content={'飲みやすくするため剤形変更・お薬の量を減らす提案や体調を確認して効果や副作用のチェックします。 '}
        />
      </div>
      <div className={styles.endingText}>
        <p>患者様はもちろん患者様のご家族や各種高齢者施設の</p>
        <p>関係者様の負担も和らげることができます。</p>
      </div>
    </div>
  )
}

export default Content;