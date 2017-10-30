import React from 'react';

const Project = ({ vacancy }) => (
  <li className="entry _child">
    <div className="entry__title">{vacancy.name}</div>
    <div className="entry-details">
      <div className="entry-details__status">Вакансия открыта, идет подбор кандидатов</div>
      <div className="entry-details__buttons">
        <button className="text-btn">Закрыть вакансию</button>
        <button className="text-btn">Удалить</button>
      </div>
    </div>
  </li>
);

export default Project;