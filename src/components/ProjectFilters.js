import React from 'react';
import NameFilter from '../containers/NameFilter';
import StatusFilter from '../containers/StatusFilter';

const ProjectFilters = () => {
  return (
    <div className="project-filters">
      <NameFilter />
      <StatusFilter />
      <button className="btn _primary">Добавить проект</button>
    </div>
  );
}

export default ProjectFilters;