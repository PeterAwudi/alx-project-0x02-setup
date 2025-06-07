import React from 'react';
import UserCard from '../components/common/UserCard';

const Users = ({ users }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {users.map(user => (
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
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

export default Users;



