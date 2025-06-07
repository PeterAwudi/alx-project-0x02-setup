import React from 'react';
import { UserProps } from '../interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <p className="text-gray-600">{address.street}, {address.suite}, {address.city} {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;

