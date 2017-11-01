import React from 'react';
import Vacancy from './Vacancy';

const VacancyList = ({ items, projectId }) => (
  <ul className="entry-childs">
    { items.map(item => (
        <Vacancy key={item.id} projectId={projectId} vacancy={item} />
      ))
    }
  </ul>
);

export default VacancyList;