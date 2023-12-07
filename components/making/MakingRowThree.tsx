import React from 'react'
import styles from './css/MakingRowThree.module.scss'
import Image from "next/image";

const MakingRowThree: React.FC = () => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.leftPhoto}>
        <Image
          src='/img/making-third.png'
          alt="logo"
          width={510}
          height={500}
          className={styles.makingLeftPhoto}
        />
      </div>
      <div className={styles.rightText}>
        <div className={styles.upperText}>
          <div className={styles.backgroundText}>
            <div className={styles.firstRow}>共により良い</div>
            <div className={styles.secondRow}>　　地域づくりを</div>
            <div className={styles.thirdRow}>　　　　目指しましょう</div>
          </div>
          <div className={styles.foregroundText}>
            <div>共により良い地域づくりを</div>
            <div>　　　　　　目指しましょう</div>
          </div>
        </div>
        <div className={styles.additionalText}>
          <div>
            ライジンググループでは「同じ志を持っている」と感じられた方、
            「社会貢献事業に興味があるけれど、自分の企業がどう役立てるか分からない」と考えられている方など調剤薬局や介護事業に限らず、
            より良い地域づくりを目指している企業の方々を受け入れる幅広い窓口を用意しております。
          </div>
          <div>
            共により良い地域づくりを目指していきましょう。
            どのようなことでも構いません。まずはお気軽にお問合せください。
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakingRowThree