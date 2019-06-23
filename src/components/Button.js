import React from "react";

const Button = ({ className, buttonText, dataid, clickHandler }) => {
  return (
    <button
      className={`favourite-btn ${className}`}
      onClick={clickHandler}
      data-id={dataid}
    >
      {buttonText}
    </button>
  );
};

export default Button;
