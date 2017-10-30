import { combineReducers } from 'redux';

const initialState = {
  statusFilter: '',
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
          status: true
        }
      ]
    },
    {
      id: 1,
      name: 'Первый проект',
      status: true,
      vacancies: [
        {
          id: 0,
          name: 'Первая вакансия',
          status: false
        },
        {
          id: 1,
          name: 'Вторая вакансия',
          status: true
        },
        {
          id: 2,
          name: 'Третья вакансия',
          status: false
        }
      ]
    },
    {
      id: 2,
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
          status: true
        }
      ]
    }
  ]
};

export function projects (state = [], action) {
  switch(action.type) {
    case 'ADD_PROJECT':
      return [...state, {
        id: action.id,
        name: action.name,
        status: true
      }];
    case 'REMOVE_PROJECT':
      let index = getIndex(state, action.id);
      index = index > -1 ? index : state.length;
      
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case 'TOGGLE_PROJECT':
      return state.map((project) => {
        if (project.id === action.id) {
          let tempProject = null;
          if (project.status) {
            tempProject = Object.assign({}, project, {
              status: !project.status,
              vacancies: toggleAllVacancies(project.vacancies)
            });
          } else {
            tempProject = Object.assign({}, project, {
              status: !project.status
            });
          }
          return tempProject;
        }
        return project;
      });
    case 'ADD_VACANCY':
    case 'REMOVE_VACANCY':
    case 'TOGGLE_VACANCY':
      return state.map((project) => {
        if (project.id === action.projectId) {
          return Object.assign({}, project, {
            vacancies: vacancies(project.vacancies, action)
          });
        }
        return project;
      });
    default:
      return state;
  }
}

function vacancies (state = [], action) {
  switch(action.type) {
    case 'ADD_VACANCY':
      return [...state, {
        id: action.id,
        name: action.name,
        status: true
      }];
    case 'REMOVE_VACANCY':
      let index = getIndex(state, action.id);
      index = index > -1 ? index : state.length;
      
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case 'TOGGLE_VACANCY':
      return state.map((vacancy) => {
        if (vacancy.id === action.id) {
          return Object.assign({}, vacancy, {
            status: !vacancy.status
          });
        }
        return vacancy;
      });
    default:
      return state;
  }
}

function getIndex (arr, id) {
  return arr.findIndex((el, i) => {
    return el.id === id;
  });
}

function toggleAllVacancies (items) {
  return items.map(item => {
    return Object.assign({}, item, {
      status: !item.status
    });
  });
}

export function statusFilter (state = '', action) {
  switch(action.type) {
    case 'FILTER_VACANCY_BY_STATUS':
      return action.status;
    default:
      return state;
  }
}

export function nameFilter (state = '', action) {
  switch(action.type) {
    case 'FILTER_VACANCY_BY_NAME':
      return action.name;
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  projects,
  statusFilter,
  nameFilter
});

export default mainReducer;
