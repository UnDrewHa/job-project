import React from 'react';
import Project from './Project';

const ProjectList = (props) => (
  <ul className="entries-list">
    { props.projects.map(item => (
        <Project key={item.id} project={item} {...props} />
      ))
    }
  </ul>
);

export default ProjectList;