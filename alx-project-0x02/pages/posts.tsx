import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '../components/common/PostCard';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto p-4">
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;




