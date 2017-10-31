import React from 'react';
import Title from './components/Title';
import ProjectFilters from './components/ProjectFilters';
import VisibleProjectList from './containers/VisibleProjectList';

const App = () => {
  return (
    <div>
      <Title>
        Список проектов
      </Title>
      <ProjectFilters />
      <VisibleProjectList />
    </div>
  )
}

export default App;