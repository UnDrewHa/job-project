import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import Button from '../components/Button';

let CreateProjectModal = ({ dispatch }) => {
  return (
    <button className="btn _primary" onClick={() => dispatch(actions.showModal('CREATE_MODAL', {
        createType: 'project',
        title: 'Новый проект',
        placeholder: 'Название проекта'
    }))}>Добавить проект</button>
  )
}

CreateProjectModal = connect()(CreateProjectModal);

export default CreateProjectModal