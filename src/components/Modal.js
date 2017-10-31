import React from 'react';

const Modal = ({ title, placeholder }) => {
  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-container__close">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fillRule="evenodd" d="M13.969 1.406L8.39 6.984l5.578 5.579-1.406 1.406L6.984 8.39l-5.578 5.578L0 12.563l5.578-5.579L0 1.406 1.406 0l5.578 5.578L12.563 0z"/></svg>
        </div>
        <div className="modal-container__title">{title}</div>
        <div className="modal-container__content">
          <form>
            <input 
              type="text" 
              className="input" 
              placeholder={placeholder} />
            <button className="btn _primary">Создать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;