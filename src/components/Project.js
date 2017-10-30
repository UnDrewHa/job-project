import React from 'react';
import VacancyList from './VacancyList';

const Project = ({ project }) => (
  <li className="entry">
    <div className="entry__title">{project.name}</div>
    <div className="entry-details">
      <div className="entry-details__count">{project.vacancies.length}</div>
      <button className="text-btn _primary">Добавить вакансию</button>
      <div className="entry-details__buttons">
        <button className="text-btn">Закрыть проект</button>
        <button className="text-btn">Удалить</button>
      </div>
    </div>
    { project.vacancies.length > 0 ? <VacancyList items={project.vacancies} /> : null }
  </li>
);

export default Project;