import React from 'react';

export default function LoginMessage({ loggedIn }) {
  return <>{loggedIn ? 'Welcome User' : 'You are not logged in!'}</>;
}
