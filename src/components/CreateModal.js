import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import * as actions from '../actions/';

const createFunc = {
  'project': actions.addProject,
  'vacancy': actions.addVacancy
}

const CreateModal = ({ modalType, modalProps, dispatch }) => {
  let input;

  const onCloseHandler = () => dispatch(actions.hideModal());
  const onSubmitHandler = (name, project, id) => dispatch(createFunc[modalProps.createType](name, project, id));

  return (
    <Modal title={modalProps.title} closeHandler={onCloseHandler}>
      <form onSubmit={(e) => {
        e.preventDefault();
        let project = Date.now(),
          id = null;

        if (modalProps.projectId) {
          project = modalProps.projectId;
          id = Date.now();
        }

        onSubmitHandler(input.value, project, id);
        onCloseHandler()
      }}>
        <input 
          type="text" 
          className="input" 
          placeholder={modalProps.placeholder}
          ref={node => input = node} />
        <button className="btn _primary">Создать</button>
      </form>
    </Modal>
  );
};

export default connect(state => state.modal)(CreateModal);