import UserCard from '../components/common/UserCard';
import React, { useState, useEffect } from 'react';
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

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data as User[]));
  }, []);

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

export default Users;

