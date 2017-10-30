import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mainReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from './data/data';


// import { normalize, schema } from 'normalizr';


// const vacancy = new schema.Entity('vacancies');

// const project = new schema.Entity('projects', { 
//   vacancies: [ vacancy ]
// });

// const mySchema = {
//   statusFilter: '',
//   nameFilter: '',
//   projects: [ project ]
// };

// const normalizedData = normalize(initialState, mySchema);

// console.log(normalizedData);


const store = createStore(mainReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);