import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const [result, setResult] = useState(0);

  const handleCalculate = (value) => {
    // Логика вычислений
    setResult(result + value);
  };

  return (
    <div>
      <Display value={result} />
      <Keypad onCalculate={handleCalculate} />
    </div>
  );
};

export default Calculator;
