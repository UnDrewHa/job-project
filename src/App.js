import React, { Component } from 'react';
import Title from './components/Title';
import ProjectFilters from './components/ProjectFilters';
import VisibleProjectList from './containers/VisibleProjectList';
import RootModal from './containers/RootModal';

const App = () => {
  return (
    <div>
      <Title>
        Список проектов
      </Title>
      <ProjectFilters />
      <VisibleProjectList />
      <RootModal />
    </div>
  )
};

export default App;