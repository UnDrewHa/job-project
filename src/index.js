import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mainReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = {
  statusFilter: true,
  nameFilter: '',
  projects: [
    {
      id: 0,
      name: 'Первый проект',
      status: true,
      vacancies: [
        {
          id: 0,
          name: 'Первая вакансия',
          status: true
        },
        {
          id: 1,
          name: 'Вторая вакансия',
          status: false
        },
        {
          id: 2,
          name: 'Третья вакансия',
          status: false
        }
      ]
    },
    {
      id: 1,
      name: 'Второй проект',
      status: true,
      vacancies: [
        {
          id: 0,
          name: 'Первая вакансия',
          status: true
        },
        {
          id: 1,
          name: 'Вторая вакансия',
          status: false
        },
        {
          id: 2,
          name: 'Третья вакансия',
          status: true
        }
      ]
    },
    {
      id: 2,
      name: 'Третий проект',
      status: true,
      vacancies: []
    }
  ]
};

const store = createStore(mainReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);