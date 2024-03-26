import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  // State for the current operation/input
  const [input, setInput] = useState("");
  // State for the result of the calculation
  const [result, setResult] = useState("");
  // State to determine if the calculation has been shown
  const [calcShown, setCalcShown] = useState(false);

  // Function to handle button clicks for numbers and operators
  const handleClick = (value) => {
    if (calcShown) {
      setInput(value);
      setResult("");
      setCalcShown(false);
    } else {
      // Append the value to the current input if no recent calculation result is shown
      setInput(input + value);
    }
  };

  // Function to calculate the result when "=" button is clicked
  const calculate = () => {
    try {
      // Evaluate the expression in the input and convert it to a string
      const calculatedResult = eval(input)

      if (!Number.isInteger(calculatedResult)) {
        // Round to 4 decimals
        setResult(calculatedResult.toFixed(4).toString());
      } else {
        setResult(calculatedResult.toString());
      }
      
      // Update the input to show the operation
      setInput(input);
      // Indicate that the calculation has been shown
      setCalcShown(true);
    } catch (error) {
      // Set the result to "Error" if the evaluation fails
      setResult("Error");
      setCalcShown(true);
    }
  };

  return (
    <div className="calculator">
      <h1 className="title">Calculator</h1>

      <div className="screen">
        <div className="text-input">{input}</div>
        <div className="text-result">{result}</div>
      </div>

      <div className="pannel">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>

        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>

        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>

        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>

        <button
          onClick={() => {
            setInput("");
            setResult("");
          }}
        >
          C
        </button>

        <button className="equal" onClick={calculate}>
          =
        </button>

        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
