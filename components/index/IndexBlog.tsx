import React, { useEffect, useState } from "react";
import styles from './css/indexBlog.module.scss';
import {fetchPosts, fetchTags} from "../../api/blogApi";
import BlogCard from "./BlogCard";
import {Post} from "../../type/PostProps";
import StyleButton from "../common/StyleButton"; // Update the path as necessary

const IndexBlog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const getPostsAndTags = async () => {
      const { posts: latestPosts } = await fetchPosts(1, undefined, 3)

      // Fetch tags for each post
      const postsWithTags = await Promise.all(latestPosts.map(async (post: { id: any; }) => {
        const tags = await fetchTags(post.id);
        return { ...post, tags }
      }));
      setPosts(postsWithTags);
    };

    getPostsAndTags();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>BLOG</p>
        <div className={styles.blogContainer}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post}/>
          ))}
          <div className={styles.viewAll}>
            <StyleButton text={'VIEW ALL'} to={'/blog'}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IndexBlog;
