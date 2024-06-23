
import React from "react";

function Button({ txt, className }) {
  const buttonClass = `px-4 py-2 font-bold   ${className}`;
  return (
    <button className={buttonClass}>
      {txt}
    </button>
  );
}

export default Button;
