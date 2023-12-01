import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My Next.js Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
