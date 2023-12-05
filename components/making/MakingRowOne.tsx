import React from 'react'
import styles from './css/MakingRowOne.module.scss'
import Image from "next/image";

const MakingRowOne: React.FC = () => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.leftPhoto}>
        <Image
          src='/img/making-first.png'
          alt="logo"
          width={510}
          height={500}
          className={styles.makingLeftPhoto}
        />
      </div>
      <div className={styles.rightText}>
        <div className={styles.upperText}>
          <div className={styles.backgroundText}>
            <div className={styles.firstRow}>出店地に</div>
            <div className={styles.secondRow}>&nbsp;&nbsp;&nbsp;&nbsp;関する</div>
            <div className={styles.thirdRow}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; こだわり</div>
          </div>
          <div className={styles.foregroundText}>出店地に関するこだわり</div>
        </div>
        <div className={styles.additionalText}>
          私たちライジンググループの出店における大前提は、「地域密着」。
          故郷であり愛着のある山口県を応援できるような企業になれるよう、山口県内で根付いていくことを大切にしています。
          そして、その気持ちを繋げていこうという想いから少しずつ視野を広げていき、中国地方の近隣地域にも出店していきます。
        </div>
      </div>
    </div>

  )


}

export default MakingRowOne