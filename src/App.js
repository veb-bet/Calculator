import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult);
        setInput(calculatedResult.toString());
      } catch (error) {
        setResult("Error");
        setInput("");
      }
    } else if (value === "C") {
      setInput("");
      setResult(0);
    } else if (value === "Del") {
      if (input.length === 1) {
        setInput("");
        setResult(0);
      } else {
        setInput(input.slice(0, -1));
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || result.toString()}</div>
        <div className="keypad">
          <button className="keypad-button" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="keypad-button" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="keypad-button" onClick={() => handleClick("9")}>
            9
          </button>
          <button
            className="keypad-button operator"
            onClick={() => handleClick("/")}
          >
            ÷
          </button>
          <button className="keypad-button" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="keypad-button" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="keypad-button" onClick={() => handleClick("6")}>
            6
          </button>
          <button
            className="keypad-button operator"
            onClick={() => handleClick("*")}
          >
            ×
          </button>
          <button className="keypad-button" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="keypad-button" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="keypad-button" onClick={() => handleClick("3")}>
            3
          </button>
          <button
            className="keypad-button operator"
            onClick={() => handleClick("-")}
          >
            -
          </button>
          <button className="keypad-button" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="keypad-button" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="keypad-button" onClick={() => handleClick("C")}>
            C
          </button>
          <button
            className="keypad-button operator"
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button
            className="keypad-button equals"
            onClick={() => handleClick("=")}
          >
            =
          </button>
          <button
            className="keypad-button operator"
            onClick={() => handleClick("Del")}
          >
            Del
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
