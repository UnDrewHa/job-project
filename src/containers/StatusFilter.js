import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/';

let StatusFilter = ({ dispatch }) => {
  function onChange (checked) {
    let status = 'all';
    if (checked) status = checked;

    dispatch(actions.filterVacancyByStatus(status))
  }

  return (
    <label htmlFor="statusFilter" className="label">
      <input 
        id="statusFilter" 
        type="checkbox" 
        className="checkbox" 
        onChange={e => onChange(e.target.checked)}/>
      <span></span>
      Только открытые
    </label>
  )
}
StatusFilter = connect()(StatusFilter)

export default StatusFilter