import React from 'react';
import './style.css';
import UserCard from './Components/UserCard';
import Counter from './Components/Counter';
import LoginMessage from './Components/LoginMessage';
import LoginControl from './Components/LoginControl';
import NameForm from './Components/NameForm';
import WelcomeEffect from './Components/WelcomeEffect';
import UsersAPI from './Components/UsersAPI';

export default function App() {
  const users = [
    { name: 'Rohan', age: 12, city: 'Pune' },
    { name: 'Amit', age: 15 },
    { name: 'Sia', age: 44 },
    { name: 'Tina', age: 13 },
    { name: 'Kabir', age: 12 },
  ];

  return (
    <>
      <p>--UserCard Component-----------------------------------</p>
      {/* {users.length
        ? users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              age={user.age}
              city={user.city}
            />
          ))
        : 'No users Found '} */}
      <p>--Counter Component-----------------------------------</p>
      {/* <Counter /> */}
      <p>--Login Component-----------------------------------</p>
      {/* <LoginMessage loggedIn={true} /> */}
      <br />
      {/* <LoginMessage loggedIn={false} /> */}
      {/* <p>--Login Control-----------------------------------</p> */}
      {/* <LoginControl /> */}
      <p>--Name Form-----------------------------------</p>
      {/* <NameForm /> */}

      <p>--UseEffect-----------------------------------</p>
      <WelcomeEffect />
      <UsersAPI />
    </>
  );
}
