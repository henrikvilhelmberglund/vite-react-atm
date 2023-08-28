import "./App.css";
import { useState } from "react";
import ATM from "./components/ATM/ATM";
export default function App() {
  const [showATM, setShowATM] = useState(true);
  return (
    <div className="App">
      <h1>ATM</h1>
      <button onClick={() => setShowATM((prevState) => !prevState)}>
        {showATM ? "Hide ATM" : "Show ATM"}
      </button>
      {showATM && <ATM></ATM>}
    </div>
  );
}
