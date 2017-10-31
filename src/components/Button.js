import React from 'react';

const Button = ({ text, onClickHandler }) => {
  return (
    <button className="btn _primary" onClick={onClickHandler}>{text}</button>
  );
};

export default Button;