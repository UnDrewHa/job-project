import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

const CreateProjectModal = ({ dispatch }) => {
  return (
    <button 
      className="btn _primary" 
      onClick={() => dispatch(actions.showModal('CREATE_MODAL', {
        createType: 'project',
        title: 'Новый проект',
        placeholder: 'Название проекта'}))}>
      Добавить проект
    </button>
  )
}

export default connect()(CreateProjectModal);