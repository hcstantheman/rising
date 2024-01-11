import React, {useState} from 'react';
import Background from "../components/index/background";
import MainContent from "../components/index/MainContent";
import styles from './css/index.module.scss';
import IndexLocation from "../components/index/Location";
import IndexBlog from "../components/index/IndexBlog";
import Footer from "../components/footer/Footer";
import MenuButton from "../components/header/menuButton/MenuButton";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className={styles.container}>
      <Background/>
      {/*{ isMobile && <div className={styles.hamburgerMenu}><MenuButton onClick={toggleMenu}/></div> }*/}
      <MainContent/>
      <IndexBlog/>
      <IndexLocation/>
      <div className={styles.space}/>
      <Footer/>
    </div>
  );
};

export default Home;
