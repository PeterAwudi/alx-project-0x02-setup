import React, { useState, useEffect } from 'react';
import UserCard from '../components/common/UserCard';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {users.map(user => (
        <UserCard key={user.id} id={user.id} name={user.name} email={user.email} address={user.address} />
      ))}
    </div>
  );
};

export default Users;


