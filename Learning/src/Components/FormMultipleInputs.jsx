import React, { useState } from "react";

export default function FormMultipleInputs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <input 
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
      />

      <input 
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
      />

      <input 
        name="city"
        placeholder="Enter city"
        onChange={handleChange}
      />

      <h3>Name: {formData.name}</h3>
      <h3>Email: {formData.email}</h3>
      <h3>City: {formData.city}</h3>
    </>
  );
}
