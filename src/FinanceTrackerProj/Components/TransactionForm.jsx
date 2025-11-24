import React, { useState, useRef, useCallback } from "react";

export default function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!text || !amount) return;

      onAdd({
        id: Date.now(),
        text,
        amount: Number(amount),
      });

      setText("");
      setAmount("");
      inputRef.current.focus();
    },
    [text, amount, onAdd]
  );

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Add Transaction</h3>

      <input
        ref={inputRef}
        type="text"
        value={text}
        placeholder="Label (e.g. Salary)"
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <input
        type="number"
        value={amount}
        placeholder="Amount (+income / -expense)"
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <button type="submit">Add</button>
    </form>
  );
}
