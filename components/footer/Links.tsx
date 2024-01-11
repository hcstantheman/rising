import React from "react";
import styles from "./css/Links.module.scss";
import LinkHolder from "./LinkHolder";
import {branchLinks, medLinks, otherLinks, pharmacistLinks, shopCreationLinks} from "../../const/footerLink";

const Links = () => {
  return (
    <div className={styles.columnsContainer}>
      <div className={styles.firstColumn}>
        <LinkHolder title="ライジンググループのお店作り" links={shopCreationLinks} />
      <div className={styles.space}/>
        <LinkHolder title="処方箋受付について" links={medLinks} />
      </div>
      <div className={styles.secondColumn}>
        <LinkHolder title="薬剤師について" links={pharmacistLinks} />
      <div className={styles.space}/>
        <LinkHolder title="その他" links={otherLinks} />
      </div>
      <div className={styles.thirdColumn}>
        <LinkHolder title="店舗一覧" links={branchLinks} twoColumn={true}/>
      </div>
    </div>
  )
}

export default Links;