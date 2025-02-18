import React, { useState } from 'react';
import Button from '../Button/Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setInput('');
      setResult('');
    } else if (label === '=') {
      if (input === '') {
        setResult('Error');
      } else {
        try {
          // Evaluate the expression
          const evaluation = eval(input);
          if (evaluation === Infinity) {
            setResult('Infinity');
          } else if (isNaN(evaluation)) {
            setResult('NaN');
          } else {
            setResult(evaluation);
          }
        } catch {
          setResult('Error');
        }
      }
    } else {
      setInput(input + label);
    }
  };

  return (
    <div className="calculator">
      <h3>React Calculator</h3>
      <input
        type="text"
        value={input}
        className="input-field"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="result-display">{result}</div>
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
