import React from 'react';
import TextButton from './TextButton';

const Vacancy = ({ vacancy, projectId, onVacancyToggle, onVacancyRemove }) => {
  let statusPlace = null,
    statusClassName = null,
    toggleButtonText = null,
    btnClass = '';

  if (vacancy.status) {
    statusPlace = 'Вакансия открыта, идет подбор кандидатов';
    toggleButtonText = 'Закрыть вакансию';
  } else {
    statusPlace = 'Вакансия закрыта, сотрудник нанят';
    statusClassName = '_closed'
    toggleButtonText = 'Открыть вакансию';
    btnClass = '_primary';
  }

  return (
    <li className="entry _child">
      <div className="entry__title">{vacancy.name}</div>
      <div className="entry-details">
        <div className={`entry-details__status ${statusClassName}`}>{statusPlace}</div>
        <div className="entry-details__buttons">
          <TextButton 
            btnClass={btnClass} 
            text={toggleButtonText} 
            onClickHandler={() => onVacancyToggle(vacancy.id, projectId)} />
          <TextButton 
            text='Удалить' 
            onClickHandler={() => onVacancyRemove(vacancy.id, projectId)} />
        </div>
      </div>
    </li>
  )
};

export default Vacancy;