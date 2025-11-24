import React from "react";

export default function TransactionList({ transactions, dispatch }) {
  return (
    <ul>
      {transactions.map(t => (
        <li key={t.id}>
          {t.text} — {t.amount}
          <button
            onClick={() => dispatch({ type: "DELETE_TRANSACTION", payload: t.id })}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
