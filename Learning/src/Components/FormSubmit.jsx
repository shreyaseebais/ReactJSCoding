import React from 'react';
import { useState} from 'react';

export default function FormSubmitComponent(){
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city: ""
      });

      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
      }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} placeholder="Name" />
            <input name="age" onChange={handleChange} placeholder="Age" />
            <input name="city" onChange={handleChange} placeholder="City" />
            <button type="submit">Submit</button>
            </form>
        </>
    )
}