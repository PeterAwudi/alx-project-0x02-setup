import React from 'react';
import { PostProps } from '../interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <p className="text-gray-600">Posted by user {userId}</p>
      </div>
    </div>
  );
};

export default PostCard;


