import React from 'react';
import { useEffect, useState } from 'react';

export default function UsersAPI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('Running...');
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <>
      <h2>Users from API</h2>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </>
  );
}
