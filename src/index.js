import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mainReducer from './reducers/';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from './data/data';

const store = createStore(mainReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);