import React from 'react';

export default function ChildCounterBtn({onIncrease}){
    return (
        <>
            <button onClick={onIncrease}>Increment</button>
        </>
    )
}