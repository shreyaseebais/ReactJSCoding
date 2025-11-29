import React from 'react';
import { useState, useEffect, useReducer } from 'react';

const initialState={count:0};

function reducer(state, action){
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
        case "RESET":
            return {count: 0}
    }
}

export default function CounterWithUseReducer(){
    const [state, dispatch]= useReducer(reducer, initialState);
    return (
        <>
            <h3>useReducer</h3>
            <p> is an alternative to useState for situations where:</p>
            <ul></ul>
            <li>You have complex state logic</li>
            <li>State updates depend on previous state</li>
            <li>Multiple actions update the same object</li>
            <h3>Count(Using useReducer): {state.count}</h3>
            <button onClick={()=> dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=> dispatch({type:"DECREMENT"})}>-</button>
            <button onClick={()=> dispatch({type:"RESET"})}>Reset</button>
        </>
    )
}