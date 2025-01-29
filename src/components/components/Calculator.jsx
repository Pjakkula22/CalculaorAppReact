import React, { useState } from "react";
import Button from "./Button";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");

  const buttonLabels = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    "C",
    "=",
    "/",
  ];

  const handleButtonClick = (label) => {
    if (!isNaN(label)) {
      // If the label is a number
      if (operator) {
        setOperand2((prev) => prev + label);
        setDisplay((prev) => prev + label);
      } else {
        setOperand1((prev) => prev + label);
        setDisplay((prev) => prev + label);
      }
    } else if (["+", "-", "*", "/"].includes(label)) {
      // If the label is an operator
      if (operand1 && !operator) {
        setOperator(label);
        setDisplay((prev) => prev + " " + label + " ");
      }
    } else if (label === "=") {
      // If the label is "="
      if (operand1 && operator && operand2) {
        const result = calculateResult();
        setDisplay(result);
        setOperand1(result);
        setOperand2("");
        setOperator("");
      }
    } else if (label === "C") {
      // If the label is "C", clear everything
      clearDisplay();
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error (Div by 0)";
      default:
        return "Error";
    }
  };

  const clearDisplay = () => {
    setDisplay("");
    setOperand1("");
    setOperand2("");
    setOperator("");
  };

  return (
    <div id="container">
      <input id="display" value={display} readOnly />
      <div id="buttons">
        {buttonLabels.map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
