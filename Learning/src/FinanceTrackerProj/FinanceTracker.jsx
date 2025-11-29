import React, {
    useContext,
    useReducer,
    useEffect,
    useCallback,
    useState,
  } from "react";
  import ThemeContext from "./Context/ThemeContext";
  import { transactionReducer } from "./Reducer/TransactionReducer";
  import TransactionForm from "./Components/TransactionForm";
  import TransactionList from "./Components/TransactionList";
  import BalanceCard from "./Components/BalanceCard";
  import LayoutMeasureBox from "./Components/LayoutMeasureBox";
  
  export default function FinanceTracker() {
    const theme = useContext(ThemeContext);
  
    const [transactions, dispatch] = useReducer(
      transactionReducer,
      [],
      () => {
        const saved = localStorage.getItem("transactions");
        return saved ? JSON.parse(saved) : [];
      }
    );
  
    const [filterText, setFilterText] = useState("");
  
    const handleAdd = useCallback(
      (newTransaction) => {
        dispatch({ type: "ADD", payload: newTransaction });
      },
      [dispatch]
    );
  
    const handleDelete = useCallback(
      (id) => dispatch({ type: "DELETE", payload: id }),
      [dispatch]
    );
  
    const handleClearAll = useCallback(
      () => dispatch({ type: "CLEAR" }),
      [dispatch]
    );
  
    // Persist to local storage
    useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);
  
    return (
      <div
        style={{
          padding: 20,
          fontFamily: "sans-serif",
          background: theme === "light" ? "#fafafa" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
        }}
      >
        <h1>Personal Finance Tracker</h1>
  
        {/* Add transaction */}
        <TransactionForm onAdd={handleAdd} />
  
        {/* Search */}
        <input
          placeholder="Search transactions"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          style={{ marginBottom: 15 }}
        />
  
        {/* Transaction list */}
        <TransactionList
          transactions={transactions}
          filterText={filterText}
          onDelete={handleDelete}
        />
  
        <button onClick={handleClearAll} style={{ marginTop: 10 }}>
          Clear All
        </button>
  
        {/* Balance summary */}
        <BalanceCard transactions={transactions} />
  
        {/* Layout measurement example */}
        <LayoutMeasureBox />
      </div>
    );
  }
  