import React from 'react';
import VacancyList from './VacancyList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

const getVisibleVacancies = (projects, statusFilter, nameFilter) => {
  let tempArr = projects.map(project => {
    let tempVacancies = null;
    tempVacancies = filterByStatus(project.vacancies, statusFilter);
    tempVacancies = filterByName(tempVacancies, nameFilter);
    return Object.assign({}, project, {
      vacancies: tempVacancies
    });
  });

  return tempArr.filter(project => project.vacancies.length > 0);
};

const filterByStatus = (vacancies, statusFilter) => {
  return vacancies.filter(vacancy => {
    return vacancy.status === statusFilter;
  });
};

const filterByName = (vacancies, nameFilter) => {
  return vacancies.filter(vacancy => {
    return vacancy.name.toLowerCase().includes(nameFilter.toLowerCase());
  });
};

const mapStateToProps = state => {
  return {
    vacancies: getVisibleVacancies(state.projects, state.statusFilter, state.nameFilter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: id => {
      dispatch(actions.toggleProject(id))
    },

    onRemove: id => {
      dispatch(actions.removeProject(id))
    }
  }
};

const VisibleVacancyList = connect(mapStateToProps, mapDispatchToProps)(VacancyList);
export default VisibleVacancyList;

