import React, { Component } from 'react';
import ProjectFilters from './components/ProjectFilters';
import VisibleProjectList from './containers/VisibleProjectList';
import RootModal from './containers/RootModal';

const App = () => {
  return (
    <div>
      <h1>Список проектов</h1>
      <ProjectFilters />
      <VisibleProjectList />
      <RootModal />
    </div>
  )
};

export default App;