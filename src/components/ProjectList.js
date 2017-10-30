import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => (
  <ul className="entries-list">
    { projects.map(item => (
        <Project key={item.id} project={item} />
      ))
    }
  </ul>
);

export default ProjectList;