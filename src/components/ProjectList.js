import React from 'react';
import Project from './Project';

const ProjectList = (props) => {
  let content;
  if (props.projects.length > 0) {
    content = <ul className="entries-list">
      { props.projects.map(item => (
          <Project key={item.id} project={item} {...props} />
        ))
      }
    </ul>
  } else {
    content = <h2>Вакансии не найдены</h2>
  }
  return content;
}

export default ProjectList;