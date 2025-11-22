import React from 'react';
import { useState } from 'react';

export default function ControlledComponent(){
    const [text, setText] = useState("");

    return (
      <>
        <h3>A controlled component is a form element whose value is controlled by React state.</h3>
        <p>Use Controlled components for most forms</p>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something"
        />
        <h4>You typed: {text}</h4>
      </>
    );
}