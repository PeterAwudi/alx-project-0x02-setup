import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '../components/common/PostCard';

const Posts = ({ posts }) => {
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

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default Posts;





