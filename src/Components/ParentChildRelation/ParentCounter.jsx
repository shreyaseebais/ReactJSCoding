import React from 'react';
import {useState} from 'react';
import ChildCounterBtn from './ChildCounterBtn';

export default function ParentCounter(){
    const[count, setCount]=useState(0);

    function increaseCount(){
        setCount(count+1);
    }

    return (
        <>
           <h2>SEND DATA FROM CHILD TO PARENT</h2>
            <h2>Count : {count}</h2>
            <ChildCounterBtn onIncrease={increaseCount}></ChildCounterBtn>
        </>
    )
}