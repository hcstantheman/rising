import React from "react";
import styles from "./css/blogCard.module.scss";
import Image from "next/image";

interface Props {
  title: string;
  date: string;
  img?: string;
  location: string;
}

const BlogCard: React.FC<Props> = ({ title, date, img, location }) => {
  return (
    <div className={styles.cardContainer}>
      { img?
      <Image
        src={img} alt="blog"
        width={292}
        height={232}
      />
        :
      <div className={styles.noImageContainer}/>
        }
      <div className={styles.dateContainer}>
        <p className={styles.cardDate}>{date}</p>
        <div className={styles.cardLocation}>{location}</div>
      </div>
      <p className={styles.cardTitle}>{title}</p>
    </div>
  );
};

export default BlogCard;