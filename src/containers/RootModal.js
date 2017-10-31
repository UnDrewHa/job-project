import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import CreateModal from '../components/CreateModal';

const modalTypes = {
  'CREATE_MODAL': CreateModal
};

let RootModal = ({modalType, modalProps, dispatch}) => {
  if (!modalType) return null;

  const createFunc = {
    'project': actions.addProject,
    'vacancy': actions.addVacancy
  }

  const SpecificModal = modalTypes[modalType];
  return <SpecificModal {...modalProps} onCloseHandler={() => dispatch(actions.hideModal())} onSubmitHandler={(name, project, id) => dispatch(createFunc[modalProps.createType](name, project, id))} />
}

RootModal = connect()(RootModal)

export default connect(
  state => state.modal
)(RootModal)