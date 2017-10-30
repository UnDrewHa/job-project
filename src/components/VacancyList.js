import React from 'react';
import Vacancy from './Vacancy';

const VacancyList = ({ items }) => (
  <ul className="entry-childs">
    { items.map(item => (
        <Vacancy key={item.id} vacancy={item} />
      ))
    }
  </ul>
);

export default VacancyList;