import React, {useEffect, useState} from 'react';
import styles from './css/indexBlog.module.scss';
import {fetchPosts} from "../../api/blogApi";
import BlogCard from "./BlogCard";

const IndexBlog: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { posts: latestPosts } = await fetchPosts(1, undefined, 3); // Fetch the latest 3 posts
      setPosts(latestPosts);
    };

    getPosts();
  }, []);
  return (
    <div className={styles.container}>
      <p className={styles.title}>BLOG</p>
      <div className={styles.blogContainer}>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default IndexBlog;