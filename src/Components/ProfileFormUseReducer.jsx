import React from 'react';
import { useReducer } from 'react';


const initialState = {
    name: "",
    email: "",
    age: ""
  };

  
function reducer(state, action) {
    return { ...state, [action.field]: action.value };
  }

export default function ProfileForm(){
    const [data, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <input
          placeholder="Name"
          onChange={(e) =>
            dispatch({ field: "name", value: e.target.value })
          }
        />
  
        <input
          placeholder="Email"
          onChange={(e) =>
            dispatch({ field: "email", value: e.target.value })
          }
        />
  
        <input
          placeholder="Age"
          onChange={(e) =>
            dispatch({ field: "age", value: e.target.value })
          }
        />
  
        <h3>Preview:</h3>
        <p>{data.name} – {data.email} – {data.age}</p>
      </div>
    );
}