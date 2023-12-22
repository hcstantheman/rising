import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/blog.module.scss';
import BlogCard from "../components/blog/blogCard";
import Select from "react-select";
import {ExtractImageUrl} from "../util/ExtractImageUrl";
import branches from "../const/branches";
import {fetchPosts, fetchTags} from "../api/blogApi";
import Link from "next/link";

const Blog: React.FC = () => {

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [posts, setPosts] = useState<any[]>([]); // State to hold your posts
  const itemsPerPage = 9;
  const [selectedBranch, setSelectedBranch] = useState<{ value: string; label: string } | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);

  const handlePageClick  = (data: { selected: number }) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const handleFilterChange = (selectedOption: { value: string; label: string } | null) => {
    setSelectedBranch(selectedOption);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { posts, totalPosts } = await fetchPosts(currentPage + 1, selectedBranch?.value, itemsPerPage);
      // @ts-ignore
      const postsWithData = await Promise.all(posts.map(async post => {
        const imageUrl = ExtractImageUrl(post.content.rendered) || '';
        const tags = await fetchTags(post.id);
        const totalPages = Math.ceil(totalPosts / itemsPerPage);
        setPageCount(totalPages);
        return { ...post, imageUrl, tags };
      }));

      setPosts(postsWithData);
    };
    fetchData();
  }, [currentPage, selectedBranch]);

  const fontStyle = {
    color: '#5D6865',
    textAlign: 'center',
    fontFamily: 'YuGothic, sans-serif', // Ensure your font is correctly imported or available
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '3.6px',
  };

  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      ...fontStyle,
      padding: '14px 34px',
      borderRadius: '20px',
      border: '1px solid rgba(93, 104, 101, 0.50)'
  }),
    placeholder: (provided: any) => ({
      ...provided,
      ...fontStyle,
    }),
    option: (provided: any) => ({
      ...provided,
      ...fontStyle,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    })
  };

  return(
    <div>
      <Header text='ブログ一覧' />
      <div className={styles.blogContainer}>
        <div className={styles.searchContainer}>
          <Select
            value={selectedBranch}
            onChange={handleFilterChange}
            options={branches}
            styles={customSelectStyles}
            placeholder="店舗の絞り込み"
          />
        </div>
        <div className={styles.blogCardContainer}>
          {posts.map(post => (
            <Link href={`/blog/${post.id}`} key={post.id} className={styles.postLink}>
                <BlogCard
                  title={post.title.rendered}
                  date={new Date(post.date).toLocaleDateString('ja-JP')}
                  location={post.tags.length > 0 ? post.tags[0].name : '薬局'}
                  img={post.imageUrl}
                />
            </Link>
          ))}
        </div>
      </div>
      <ReactPaginate
        previousClassName={currentPage === 0 ? styles.hidden : ""}
        nextClassName={currentPage === pageCount - 1 ? styles.hidden : ""}
        previousLabel={currentPage === 0 ? null : '←'}
        nextLabel={currentPage === pageCount - 1 ? null : '→'}
        breakLabel={'...'}
        pageCount={pageCount} // Total number of pages
        marginPagesDisplayed={2} // Number of pages to display at the edges
        pageRangeDisplayed={5} // Number of pages to display in the middle
        onPageChange={handlePageClick} // Function to call when a page is clicked
        containerClassName={styles.pagination} // Class name for the container
        activeClassName={styles.active} // Class name for the active page
      />
      <Footer />
    </div>
  );
}

export default Blog;
