import React from "react";

function Button({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)} className="calculator-button">
      {label}
    </button>
  );
}

export default Button;
