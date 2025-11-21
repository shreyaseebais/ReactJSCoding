import React from 'react';
import { useState } from 'react';

export default function NameForm() {
  const [name, setName] = useState('YOUR NAME HERE ');
  return (
    <>
      <p>Enter your name :</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>You Entered Name : {name} </p>
    </>
  );
}
