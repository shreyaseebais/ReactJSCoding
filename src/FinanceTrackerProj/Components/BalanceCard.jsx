import React, { useMemo } from "react";

export default function BalanceCard({ transactions }) {
  const balance = useMemo(() => {
    return transactions.reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  return (
    <div
      style={{
        background: "#d1ffd1",
        padding: 20,
        marginTop: 10,
        borderRadius: 5,
      }}
    >
      <h2>Total Balance: ₹{balance}</h2>
    </div>
  );
}
