import type { NextPage } from 'next';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import { useState } from 'react';

// ...

const Home: NextPage = () => {
  // ...

  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page!</h1>
      {/* ... */}
    </div>
  );
};

export default Home;



