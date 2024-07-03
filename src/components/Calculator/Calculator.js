import React, { useState } from "react";
import Button from "../Button/Button";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (label) => {
    if (label === "C") {
      setInput("");
      setResult("");
    } else if (label === "=") {
      try {
        // Evaluate the expression
        const evaluation = eval(input);
        setResult(evaluation === Infinity ? "NaN" : evaluation);
      } catch {
        setResult("NaN");
      }
    } else {
      setInput(input + label);
    }
  };

  return (
    <div className="calculator">
      <h3>React Calculator</h3>

      <div className="display">{result || input || "0"}</div>
      <div className="button-row">
        <Button label="7" onClick={handleButtonClick} />
        <Button label="8" onClick={handleButtonClick} />
        <Button label="9" onClick={handleButtonClick} />
        <Button label="+" onClick={handleButtonClick} />
      </div>
      <div className="button-row">
        <Button label="4" onClick={handleButtonClick} />
        <Button label="5" onClick={handleButtonClick} />
        <Button label="6" onClick={handleButtonClick} />
        <Button label="-" onClick={handleButtonClick} />
      </div>
      <div className="button-row">
        <Button label="1" onClick={handleButtonClick} />
        <Button label="2" onClick={handleButtonClick} />
        <Button label="3" onClick={handleButtonClick} />
        <Button label="*" onClick={handleButtonClick} />
      </div>
      <div className="button-row">
        <Button label="C" onClick={handleButtonClick} />
        <Button label="0" onClick={handleButtonClick} />
        <Button label="=" onClick={handleButtonClick} />
        <Button label="/" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
