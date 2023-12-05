import React from 'react'
import styles from './css/MakingRowTwo.module.scss'
import Image from "next/image";

const MakingRowTwo: React.FC = () => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.leftText}>
        <div className={styles.upperText}>
          <div className={styles.backgroundText}>
            <div className={styles.firstRow}>ライジングが</div>
            <div className={styles.secondRow}>&nbsp;&nbsp;目指すところ</div>
          </div>
          <div className={styles.foregroundText}>ライジングが目指すところ</div>
        </div>
        <div className={styles.bubbleWrapper}>
          <p className={styles.bubbleText}>一人ひとりの笑顔のために</p>
        </div>
        <div className={styles.additionalText}>
          <div>
            それぞれの住む地域に自ら貢献することで、住みよい地域を作ること。
            諸外国では当たり前のように行われています。
            日本でも、そして世界でも、社会貢献があたり前のように行われる世の中にしていくために、
            ライジンググループの活動を広げていきたい。
          </div>
          <div>
            そのためにも私たちが大事にしている「地域密着精神」をもとに、まずは目の前の人を笑顔にしていきたい。
            目の前の人の笑顔がそのとなりの人の笑顔へと連鎖的につながっていくことで、
            私たちの気持ちもまた広く世界へとつながっていくのだと考えています。
          </div>
        </div>
      </div>
      <div className={styles.rightPhoto}>
        <Image
          src='/img/making-second.png'
          alt="logo"
          width={510}
          height={500}
          className={styles.makingRightPhoto}
        />
      </div>
    </div>

  )


}

export default MakingRowTwo