import React from 'react';
import NameFilter from '../containers/NameFilter';
import StatusFilter from '../containers/StatusFilter';
import CreateProjectButton from '../containers/CreateProjectButton';

const ProjectFilters = () => {
  return (
    <div className="project-filters">
      <NameFilter />
      <StatusFilter />
      <CreateProjectButton />
    </div>
  );
}

export default ProjectFilters;