import React from 'react';
import { useState } from 'react';

export default function ChildForm({onSubmitData }){
    const [text, setText]= useState("");

    return (
        <>
            <input
            type="text"
            placeholder="Enter something"
            value={text}
            onChange={(e) => setText(e.target.value)}
                />
            <button onClick={() => onSubmitData(text)}>
                Submit
            </button>
        </>
    )
}