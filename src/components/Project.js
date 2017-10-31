import React from 'react';
import Vacancy from './Vacancy';
import {formatVacancyCount} from '../helpers/';
import TextButton from './TextButton';

const Project = ({ project, onProjectToggle, onProjectRemove, onVacancyToggle, onVacancyRemove, onVacancyAdd }) => {
  let statusPlace = null,
    statusClassName = '',
    btnClass = '',
    toggleButtonText = '';

  if (project.status) {
    statusPlace = <TextButton btnClass='_primary' text='Добавить вакансию' onClickHandler={() => onVacancyAdd(project.id)} />;
    toggleButtonText = 'Закрыть проект';
  } else {
    statusPlace = <div className="entry-details__status _closed">Проект закрыт, сотрудники наняты</div>;
    statusClassName = '_closed';
    toggleButtonText = 'Открыть проект';
    btnClass = '_primary';
  }

  return (
    <li className={`entry ${statusClassName}`}>
      <div className="entry__title">{project.name}</div>
      <div className="entry-details">
        <div className="entry-details__count">{formatVacancyCount(project.vacancies.length, 'Вакансия', 'Вакансии', 'Вакансий')}</div>
        { statusPlace }
        <div className="entry-details__buttons">
          <TextButton btnClass={btnClass} text={toggleButtonText} onClickHandler={() => onProjectToggle(project.id)} />
          <TextButton text='Удалить' onClickHandler={() => onProjectRemove(project.id)} />
        </div>
      </div>
      <ul className="entry-childs">
        { project.vacancies.map(item => (
            <Vacancy 
              key={item.id} 
              vacancy={item} 
              projectId={project.id} 
              onVacancyToggle={onVacancyToggle} 
              onVacancyRemove={onVacancyRemove} />
          ))
        }
      </ul>
    </li>
)};

export default Project;