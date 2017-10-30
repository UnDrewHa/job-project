import React from 'react';

const ProjectFilters = () => {
  return (
    <div className="project-filters">
      <input type="text" className="input" placeholder='Поиск по вакансиям' />
      <label htmlFor="statusFilter" className="label">
        <input id="statusFilter" type="checkbox" className="checkbox" />
        <span></span>
        Только открытые
      </label>
      <button className="btn _primary">Добавить проект</button>
    </div>
  );
}

export default ProjectFilters;