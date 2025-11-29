import React from 'react';
import { useEffect, useState } from 'react';

export default function WelcomeEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
    console.log(document.title);
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
