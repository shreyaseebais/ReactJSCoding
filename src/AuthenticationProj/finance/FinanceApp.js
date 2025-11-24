import React, {
    useState,
    useReducer,
    useRef,
    useMemo,
    useEffect
  } from "react";
  import { transactionReducer } from "../reducers/transactionReducer";
  import TransactionForm from "./TransactionForm";
  import TransactionList from "./TransactionList";
  import BalanceCard from "./BalanceCard";
  
  export default function FinanceApp() {
    const [transactions, dispatch] = useReducer(transactionReducer, []);
  
    useEffect(() => {
      const saved = localStorage.getItem("transactions");
      if (saved) dispatch({ type: "INIT", payload: JSON.parse(saved) });
    }, []);
  
    useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);
  
    const total = useMemo(
      () => transactions.reduce((acc, t) => acc + t.amount, 0),
      [transactions]
    );
  
    return (
      <div style={{ padding: 30 }}>
        <h2>Finance Tracker</h2>
  
        <BalanceCard total={total} />
  
        <TransactionForm dispatch={dispatch} />
  
        <TransactionList
          transactions={transactions}
          dispatch={dispatch}
        />
      </div>
    );
  }
  