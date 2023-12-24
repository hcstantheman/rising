// BlogCard.js
import React from 'react';
import {Post} from "../../type/PostProps";
import styles from './css/blogCard.module.scss';

type BlogCardProps = {
  post: Post;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Extract the necessary data from the post object
  const { date, title, tag } = post; // Adjust based on how the data is structured

  return (
    <div className={styles.container}>
      <h2>{title.rendered}</h2> {/* Adjust if your title is structured differently */}
      <p>{new Date(date).toLocaleDateString()}</p> {/* Format the date as you like */}
      <p>{tag}</p> {/* Assuming tag is a string; adjust if it's structured differently */}

    </div>
  );
};

export default BlogCard;
