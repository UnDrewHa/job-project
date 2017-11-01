import React from 'react';
import TextButton from './TextButton';
import * as actions from '../actions/';
import { connect } from 'react-redux';

const Vacancy = ({ vacancy, projectId, onVacancyToggle, onVacancyRemove }) => {
  let statusClassName = '';

  if (!vacancy.status) {
    statusClassName = '_closed'
  }

  return (
    <li className="entry _child">
      <div className="entry__title">{vacancy.name}</div>
      <div className="entry-details">
        <div className={`entry-details__status ${statusClassName}`}>
          { vacancy.status ? 'Вакансия открыта, идет подбор кандидатов' : 'Вакансия закрыта, сотрудник нанят' }
        </div>
        <div className="entry-details__buttons">
          <TextButton 
            status={vacancy.status}
            buttonType='toggle'
            contentType='vacancy'
            onClickHandler={() => onVacancyToggle(vacancy.id, projectId)} />
          <TextButton 
            buttonType='delete'
            contentType='vacancy' 
            onClickHandler={() => onVacancyRemove(vacancy.id, projectId)} />
        </div>
      </div>
    </li>
  )
};

const dispatchToProps = (dispatch) => {
  return {
    onVacancyToggle: (id, projectId) => {
      dispatch(actions.toggleVacancy(id, projectId))
    },

    onVacancyRemove: (id, projectId) => {
      dispatch(actions.removeVacancy(id, projectId))
    }
  }
}

export default connect(null, dispatchToProps)(Vacancy);