import React from "react";
import styles from "./css/note.module.scss";
import Image from 'next/image'


const PriceNote: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>注意事項</p>
      <div className={styles.firstRow}>
        <p>麻薬等の特別な薬剤が使用されている場合</p>
        <div className={styles.line}>
          <Image
            src="/img/price-arrow.svg" alt="arrow"
            width={14} height={14}
            className={styles.arrow}
          />
          <p>１回につき、１割負担の方は１００円、２割負担の方は２００円が加えられます。</p>
        </div>
      </div>
      <div className={styles.secondRow}>
        <p>離島や中山間地域等でサービスをご利用の場合</p>
        <div className={styles.line}>
          <Image
            src="/img/price-arrow.svg" alt="arrow"
            width={14} height={14}
            className={styles.arrow}
          />
          <div className={styles.textBox}>
            <p>１.離島等に所在する事業所のサービスのご利用に関しては、月の利用の合計金額に15％が加算されます。</p>
            <p>２.中山間地域等に所在する小規模事業所のサービスのご利用に関しては、月の利用の合計金額に10％が加算されます。</p>
            <p>３.離島や中山間地域等に居住する方へのサービス提供に関しては、月の利用の合計金額に5％が加算されます。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceNote;