import React from 'react';
import './style.css';
import UserCard from './Components/UserCard';
import Counter from './Components/Counter';
import LoginMessage from './Components/LoginMessage';
import LoginControl from './Components/LoginControl';
import NameForm from './Components/NameForm';
import WelcomeEffect from './Components/WelcomeEffect';
import UsersAPI from './Components/UsersAPI';
import ParentCounter from './Components/ParentChildRelation/ParentCounter';
import ParentFormHandler from './Components/ParentChildRelation/ParentFormHandler';

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
      <p>--1--Props Component----------------------------------</p>
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
      <p>--2--Counter Component-----------------------------------</p>
      {/* <Counter /> */}
      <p>--3--Login Component--------------------------------------</p>
      {/* <LoginMessage loggedIn={true} /> */}
      <br />
      {/* <LoginMessage loggedIn={false} /> */}
      {/* <p>--Login Control---------------------------------------</p> */}
      {/* <LoginControl /> */}
      <p>--4--Name Form---------------------------------------------</p>
      {/* <NameForm /> */}

      <p>--5--UseEffect------------------------------------------------</p>
      {/* <WelcomeEffect /> */}
      {/* <UsersAPI /> */}
      <p>--6--Send data from Child to Parent------------------------</p>
      {/* {<ParentCounter/>} */}
      <p>--7--Send data from Child to Parent------------------------</p>
      {/* {<ParentFormHandler/>} */}
        

    </>
  );
}
