import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/';

let NameFilter = ({ dispatch }) => {
  function onChange (name) {
    dispatch(actions.filterVacancyByName(name))
  }

  return (
    <input 
      type="text" 
      className="input" 
      placeholder='Поиск по вакансиям'
      onChange={e => onChange(e.target.value)}/>
  )
}
NameFilter = connect()(NameFilter)

export default NameFilter