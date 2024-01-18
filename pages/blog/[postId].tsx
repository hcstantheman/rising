import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {fetchPost, fetchTags} from '../../api/blogApi';
import { Post as PostType } from '../../type/PostProps';
import styles from './single.module.scss';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DottedLine from "../../components/common/DottedLine";
import Slider from 'react-slick';
import StyleButton from "../../components/common/StyleButton";

const Post = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
  const { postId } = router.query;
  const [numDots, setNumDots] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setNumDots(window.innerWidth <= 768 ? 45 : 134);
      setMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    const id = Array.isArray(postId) ? postId[0] : postId;

    if (id) {
      fetchPost(id).then(data => {
        setPost(data);
      }).catch(error => {
        console.error('Error fetching post:', error);
      });
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [postId]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Header text={''}/>
      <div className={styles.blogHeader}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{post.title.rendered}</p>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.location}>{post.tag}</p>
          <p className={styles.date}>{new Date(post.date).toLocaleDateString().replace(/\//g, '.')}</p>
        </div>
      </div>
      <div className={styles.line}>
        <DottedLine numDots={numDots}/>
      </div>
      <Slider {...settings}>
        {post.images && post.images.map((imageUrl, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={imageUrl} alt={`Blog post image ${index + 1}`} className={styles.sliderImage}/>
          </div>
        ))}
      </Slider>
      <div className={styles.contentContainer}>
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className={styles.buttonContainer}>
          {post.nextPostId && <StyleButton text={'＜　前の記事へ'} to={`/blog/${post.nextPostId}`}/>}
          {mobile ? null : <StyleButton text={'一覧へ戻る'} to={'/blog'}/> }
          {post.prevPostId && <StyleButton text={'次の記事へ　＞'} to={`/blog/${post.prevPostId}`}/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Post;
