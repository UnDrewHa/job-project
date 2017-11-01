import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => {
  return (
    projects.length > 0 ? (
      <ul className="entries-list">
        { projects.map(item => (
            <Project key={item.id} project={item} />
          ))
        }
      </ul>
    ) : (
      <h2>Вакансии не найдены</h2>
    )
  );
}

export default ProjectList;