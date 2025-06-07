import React from 'react';
import UserCard from '../components/common/UserCard';

const Users = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Hardcoded users data for now */}
      {[
        { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Main St' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', address: '456 Elm St' },
      ].map(user => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Users;




