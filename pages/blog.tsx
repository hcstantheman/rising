import React, {useState} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/blog.module.scss';
import Image from "next/image";
import BlogCard from "../components/blog/blogCard";

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerPage = 10;
  const pageCount = Math.ceil(100 / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    // Fetch new data based on 'selectedItem.selected'
  };


  return(
    <div>
      <Header text='ブログ一覧' />
        <div className={styles.blogContainer}>
          <div className={styles.searchContainer}>
            <p>店舗の絞り込み</p>
            <Image
              src={'/img/blog-search.svg'}
              alt={'arrow'}
              width={20}
              height={9}
            />
          </div>
          <div className={styles.blogCardContainer}>
            <BlogCard
              title={'タイトルタイトルタイトルタイトルタイトルタイトルタイトル'}
              date={'2023.11.09'}
              location={'まさむね薬局'}
            />
            <BlogCard
              title={'タイトルタイトルタイトルタイトルタイトルタイトルタイトル'}
              date={'2023.11.09'}
              location={'まさむね薬局'}
            />
            <BlogCard
              title={'タイトルタイトルタイトルタイトルタイトルタイトルタイトル'}
              date={'2023.11.09'}
              location={'まさむね薬局'}
            />
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Blog;