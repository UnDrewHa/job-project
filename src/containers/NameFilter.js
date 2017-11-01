import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

const NameFilter = ({ dispatch }) => {
  return (
    <input 
      type="text" 
      className="input" 
      placeholder='Поиск по вакансиям'
      onChange={e => dispatch(actions.filterVacancyByName(e.target.value))}/>
  )
}

export default connect()(NameFilter);