import type { NextPage } from 'next';
import Header from '../components/layout/Header';
import PostModal from '../components/common/PostModal';
import { useState } from 'react';
import Card from '@/components/common/Card';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    console.log('Adding new post:', title, content);
    // Add logic to add the post here
  };

  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page!</h1>
      <button onClick={() => setIsOpen(true)}>Open Post Modal</button>
      <PostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
};

export default Home;




