import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/blog.module.scss';
import BlogCard from "../components/blog/blogCard";
import Select from "react-select";
import {ExtractImageUrl} from "../util/ExtractImageUrl";
import branches from "../const/branches";
import {fetchPosts, fetchTags} from "../api/blogApi";

const Blog: React.FC = () => {

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [posts, setPosts] = useState<any[]>([]); // State to hold your posts
  const itemsPerPage = 10;
  const [selectedBranch, setSelectedBranch] = useState<{ value: string; label: string } | null>(null);
  const handleFilterChange = (selectedOption: { value: string; label: string } | null) => {
    setSelectedBranch(selectedOption);
  };
  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetchPosts(selectedBranch?.label, itemsPerPage);
      // @ts-ignore
      const postsWithData = await Promise.all(posts.map(async post => {
        const imageUrl = ExtractImageUrl(post.content.rendered) || '';
        const tags = await fetchTags(post.id);
        return { ...post, imageUrl, tags };
      }));
      setPosts(postsWithData);
    };
    fetchData();
  }, [currentPage, selectedBranch]);


  return(
    <div>
      <Header text='ブログ一覧' />
      <div className={styles.blogContainer}>
        <div className={styles.searchContainer}>
          <Select
            value={selectedBranch}
            onChange={handleFilterChange}
            options={branches}
            className="branch-select"
            classNamePrefix="select"
          />
        </div>
        <div className={styles.blogCardContainer}>
          {posts.map(post => (
            <BlogCard
              key={post.id}
              title={post.title.rendered}
              date={new Date(post.date).toLocaleDateString('ja-JP')}
              location={post.tags.length > 0 ? post.tags[0].name : '薬局'}
              img={post.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
