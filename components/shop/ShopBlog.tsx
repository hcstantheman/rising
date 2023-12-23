import React, {useEffect, useState} from "react";
import styles from "./css/shopBlog.module.scss";
import DottedLine from "../common/DottedLine";
import BlogCard from "../blog/blogCard";
import {fetchPosts} from "../../api/blogApi";
import Link from "next/link";
import StyleButton from "../common/StyleButton";

const ShopBlog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // check const/branch for the id
    const yourBranchTagId = '4';

    fetchPosts(1, yourBranchTagId, 3).then(data => { setPosts(data.posts) })
  }, []);

  return(
    <div className={styles.container}>
      <p className={styles.title}>最新ブログ</p>
      <DottedLine numDots={27}/>
      <div className={styles.postContainer}>
        {posts.map(post => (
          <Link href={`/blog/${post.id}`} key={post.id} className={styles.postLink}>
            <BlogCard
              title={post.title.rendered}
              date={new Date(post.date).toLocaleDateString('ja-JP')}
              location='まさむね薬局'
              img={post.imageUrl}
            />
          </Link>
        ))}
      </div>
      <div className={styles.button}><StyleButton text={'ViewAll'} to={'/blog'}/></div>
    </div>
  )
}

export default ShopBlog;