import React, {
    useState, 
    useEffect, 
    useRef, 
    createContext, 
    useContext, 
    useReducer, 
    useMemo,
    useCallback, 
    useLayoutEffect
} from "react";

// ---------- CONTEXT ----------
const ThemeContext = createContext();

// ---------- REDUCER ----------
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
};


export default function HookDashboard() {
    // ---------- useState ----------
    const [name, setName] = useState("React Developer");
  
    // ---------- useRef ----------
    const inputRef = useRef();
  
    // ---------- useReducer ----------
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
    // ---------- useContext ----------
    const theme = "light";
  
    // ---------- useEffect ----------
    useEffect(() => {
      console.log("Name changed:", name);
    }, [name]);
  
    // ---------- useLayoutEffect ----------
    const boxRef = useRef();
    const [boxWidth, setBoxWidth] = useState(0);
  
    useLayoutEffect(() => {
      const rect = boxRef.current.getBoundingClientRect();
      setBoxWidth(rect.width);
    }, [name]);
  
    // ---------- useMemo ----------
    const expensiveCalc = useMemo(() => {
      console.log("Running expensive calculation...");
      let total = 0;
      for (let i = 0; i < 20000000; i++) {
        total += i;
      }
      return total;
    }, [state.count]);
  
    // ---------- useCallback ----------
    const focusInput = useCallback(() => {
      inputRef.current.focus();
    }, []);
  
    return (
      <ThemeContext.Provider value={theme}>
        <div
          style={{
            padding: 20,
            fontFamily: "sans-serif",
            background: theme === "light" ? "#f5f5f5" : "#222",
          }}
        >
          <h1>React Hooks Dashboard</h1>
  
          {/* useState + useEffect */}
          <div style={{ marginBottom: 20 }}>
            <h2>Name: {name}</h2>
            <input
              ref={inputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type name"
            />
            <button onClick={focusInput} style={{ marginLeft: 10 }}>
              Focus Input (useCallback + useRef)
            </button>
          </div>
  
          {/* useReducer */}
          <div style={{ marginBottom: 20 }}>
            <h2>Counter: {state.count}</h2>
            <button onClick={() => dispatch({ type: "INC" })}>+</button>
            <button onClick={() => dispatch({ type: "DEC" })} style={{ marginLeft: 10 }}>
              -
            </button>
          </div>
  
          {/* useMemo */}
          <div style={{ marginBottom: 20 }}>
            <h2>Expensive Result: {expensiveCalc}</h2>
            <p>(Recalculates only when counter changes)</p>
          </div>
  
          {/* useLayoutEffect */}
          <div
            ref={boxRef}
            style={{
              background: "lightblue",
              height: 50,
              marginBottom: 10,
              padding: 10,
            }}
          >
            Box width measured using useLayoutEffect
          </div>
          <p>Measured width: {boxWidth}px</p>
  
          {/* useContext */}
          <ThemeInfo />
        </div>
      </ThemeContext.Provider>
    );
  }
  
  // ---------- Component using useContext ----------
  function ThemeInfo() {
    const theme = useContext(ThemeContext);
    return <h3>Theme from Context: {theme}</h3>;
  }