import * as actions from './actions/index';
import mainReducer from './reducers/index';
import { createStore } from 'redux';

const initialState = {
  statusFilter: '',
  nameFilter: '',
  projects: []
};

const store = createStore(mainReducer, initialState);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addProject('Первый проект', 0));
store.dispatch(actions.addProject('Второй проект', 1));
store.dispatch(actions.addProject('Третий проект', 2));
store.dispatch(actions.removeProject(1));
store.dispatch(actions.removeProject(2));
store.dispatch(actions.addVacancy('Первая вакансия', 0, 0));
store.dispatch(actions.addVacancy('Вторая вакансия', 0, 1));
store.dispatch(actions.addVacancy('Третья вакансия', 0, 2));
store.dispatch(actions.toggleProject(0));
store.dispatch(actions.toggleProject(0));
store.dispatch(actions.filterVacancyByName('перв'));
store.dispatch(actions.filterVacancyByStatus(true));

unsubscribe();