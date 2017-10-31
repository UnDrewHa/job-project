import React from 'react';

const TextButton = ({ btnClass, text, onClickHandler }) => {
  return (
    <button className={`text-btn ${btnClass}`} onClick={onClickHandler}>{text}</button>
  );
};

export default TextButton;