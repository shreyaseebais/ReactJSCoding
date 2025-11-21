import React from 'react';
import { useState, useEffect } from 'react';
import ChildForm from './ChildForm';

export default function ParentFormHandler(){
    const [received, setReceived] = useState("");

  function handleChildData(data) {
    setReceived(data);
  }

  return (
    <>
      <h2>SEND DATA FROM CHILD TO PARENT</h2>
      <ChildForm onSubmitData={handleChildData} />
      <h3>Data from Child: {received}</h3>
    </>
  );
}