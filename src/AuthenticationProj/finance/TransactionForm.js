import React, { useState, useRef } from "react";

export default function TransactionForm({ dispatch }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef();

  const submit = () => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        id: Date.now(),
        text,
        amount: parseFloat(amount)
      }
    });

    setText("");
    setAmount("");
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      /><br />

      <button onClick={submit}>Add</button>
    </div>
  );
}
