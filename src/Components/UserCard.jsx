import React from 'react';

function UserCard(props) {
  return (
    <div>
      Name: {props.name} <br />
      Age: {props.age} <br />
      Status: {props.age >= 18 ? 'Adult' : 'Minor'}
      <br />
      City: {props.city}
      <br />
      <p>------------------------</p>
    </div>
  );
}

export default UserCard;
