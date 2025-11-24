import React from 'react';
import UserCard from './UserCard';

export default function UserPropsChild(){
    const users = [
        { name: 'Rohan', age: 12, city: 'Pune' },
        { name: 'Amit', age: 15 },
        { name: 'Sia', age: 44 },
        { name: 'Tina', age: 13 },
        { name: 'Kabir', age: 12 },
      ];


    return (
        <>
            {users.length
            ? users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              age={user.age}
              city={user.city}
            />
          ))
        : 'No users Found '}
        </>
    )
}