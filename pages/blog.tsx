import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './css/blog.module.scss';
import Image from "next/image";

const Blog: React.FC = () => {
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
        </div>
      <Footer />
    </div>
  )
}

export default Blog;