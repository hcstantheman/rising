import React from 'react';
import styles from './css/question.module.scss';

interface Props {
  question: string;
  answer: string;
  secondLine?: string;
}
const Question: React.FC<Props> = ({question, answer, secondLine}) => {
  return (
    <div>
      <div className={styles.question}>
        <p className={styles.questionFont}>Q.</p>
        <p className={styles.value}>{question}</p>
      </div>
      <div className={styles.answer}>
        <p className={styles.answerFont}>A.</p>
        <div>
          <p className={styles.value}>{answer}</p>
          { secondLine ?
            <p className={styles.value}>{secondLine}</p>
            :
            null
          }
        </div>
      </div>
    </div>
  )
}

export default Question;
