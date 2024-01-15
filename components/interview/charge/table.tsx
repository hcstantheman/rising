import React from "react";
import styles from "./css/table.module.scss";

const PriceTable: React.FC = () => {
  return(
    <table className={styles.table}>
      <tbody>
        <tr className={styles.firstRow}>
          <td className={styles.firstColumn}></td>
          <td>単一建物住居者１人</td>
          <td>単一建物住居者２～９人</td>
          <td>単一建物住居者１０人以上</td>
        </tr>
      </tbody>
      <tbody>
        <tr className={styles.secondRow}>
          <td className={styles.firstColumn}>１割負担の方</td>
          <td>５１７円</td>
          <td>３７８円</td>
          <td>３４１円</td>
        </tr>
      </tbody>
    </table>
  )
}
export default PriceTable;