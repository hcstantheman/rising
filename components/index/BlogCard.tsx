import React from 'react';
import styles from './css/blogCard.module.scss';
import IndexArrowButton from "./IndexArrow";
import {useRouter} from "next/router";
import StyleButton from "../common/StyleButton";


const BlogCard: React.FC<{ post: any }> = ({ post }) => {
  const router = useRouter();
  const navigateToPost = () => {
    router.push(`/blog/${post.id}`); // Navigate to the blog post page
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.contentContainer}>
        <p className={styles.date}>
          {new Date(post.date).toLocaleDateString()
            .replace(/\//g, '.')}
        </p>
        <div className={styles.tag} key={post.tags[0].id}>{post.tags[0].name}</div>
        <p className={styles.title}>{post.title.rendered}</p>
      </div>
      <div className={styles.arrowButton} onClick={navigateToPost}>
        <IndexArrowButton/>
      </div>

    </div>
  );
};

export default BlogCard;
