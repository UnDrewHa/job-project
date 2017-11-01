import React from 'react';
import { options } from '../data/options';

const TextButton = ({ buttonType, contentType, status, onClickHandler }) => {
  let btnClass = '',
    buttonText = '';

  if (!status) {
    btnClass = '_primary';
  }

  if (buttonType === 'addVacancy') {
    buttonText = options.project.addVacancy;
    btnClass = '_primary';
  } else if (buttonType === 'delete') {
    buttonText = options[contentType].deleteText;
    btnClass = '';
  } else if (buttonType === 'toggle' && status) {
    buttonText = options[contentType].closeText;
  } else if (buttonType === 'toggle' && !status) {
    buttonText = options[contentType].openText;
  }

  return (
    <button className={`text-btn ${btnClass}`} onClick={onClickHandler}>{buttonText}</button>
  );
};

export default TextButton;