import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';

export default function UncontrolledComponent(){
    const inputRef = useRef();

    function handleSubmit() {
        alert(inputRef.current.value);
    }

    return (
        <>
        <h3>In an uncontrolled component, React does NOT control the value.
        Instead, the browser keeps track of it, and we fetch the value when needed using useRef.</h3>
        <p>Use Uncontrolled only for: Quick scripts,Small forms,Third-party plugins</p>
        <input ref={inputRef} placeholder="Enter name" />
        <button onClick={handleSubmit}>Submit</button>
        </>
    );
}