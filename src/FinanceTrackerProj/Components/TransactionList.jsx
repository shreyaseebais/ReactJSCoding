import React, { useMemo } from "react";

export default function TransactionList({
  transactions,
  filterText,
  onDelete,
}) {
  const filtered = useMemo(() => {
    return transactions.filter((t) =>
      t.text.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [transactions, filterText]);

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Transactions</h3>

      {filtered.length === 0 && <p>No transactions found.</p>}

      {filtered.map((t) => (
        <div
          key={t.id}
          style={{
            background: "#eee",
            padding: 10,
            marginBottom: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            {t.text} ({t.amount})
          </span>

          <button onClick={() => onDelete(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
