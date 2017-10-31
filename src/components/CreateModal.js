import React from 'react';

const CreateModal = ({ title, placeholder, projectId, onSubmitHandler, onCloseHandler }) => {
  let input;
  return (
    <div className="modal _open">
      <div className="modal-overlay" onClick={() => onCloseHandler()}></div>
      <div className="modal-container">
        <div className="modal-container__close" onClick={() => onCloseHandler()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fillRule="evenodd" d="M13.969 1.406L8.39 6.984l5.578 5.579-1.406 1.406L6.984 8.39l-5.578 5.578L0 12.563l5.578-5.579L0 1.406 1.406 0l5.578 5.578L12.563 0z"/></svg>
        </div>
        <div className="modal-container__title">{title}</div>
        <div className="modal-container__content">
          <form onSubmit={(e) => {
            e.preventDefault();
            let project = Date.now(),
              id = null;

            if (projectId) {
              project = projectId;
              id = Date.now();
            }

            onSubmitHandler(input.value, project, id);
            onCloseHandler()
          }}>
            <input 
              type="text" 
              className="input" 
              placeholder={placeholder}
              ref={node => input = node} />
            <button className="btn _primary">Создать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;