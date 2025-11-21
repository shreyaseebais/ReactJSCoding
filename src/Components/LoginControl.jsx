import { useState } from 'react';
import React from 'react';

export default function LoginControl() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? <h2>Welcome User 🎉</h2> : <h2>Please Log In</h2>}

      <button onClick={() => setLoggedIn(true)}>Login</button>
      <button onClick={() => setLoggedIn(false)}>Logout</button>
    </>
  );
}
