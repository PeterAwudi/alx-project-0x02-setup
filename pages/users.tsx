import UserCard from '../components/common/UserCard';
import React from 'react';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

const Users = ({ users }: { users: User[] }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {users.map((user: User) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={`${user.address.street}, ${user.address.city}`}
        />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

export default Users;


