import React from 'react';
import ProjectList from './ProjectList';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const getVisibleProjects = (projects, statusFilter, nameFilter) => {
  if (statusFilter !== '' || nameFilter !== '') {
    return projects.map(project => {
      let tempVacancies = null;
      tempVacancies = filterByStatus(project.vacancies, statusFilter);
      tempVacancies = filterByName(tempVacancies, nameFilter);
      return Object.assign({}, project, {
        vacancies: tempVacancies
      });
    });
  }

  return projects;
};

const filterByStatus = (vacancies, statusFilter) => {
  return vacancies.filter(vacancy => {
    if (statusFilter === '') return vacancies;
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
    projects: getVisibleProjects(state.projects, state.statusFilter, state.nameFilter)
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

const VisibleProjectList = connect(mapStateToProps, mapDispatchToProps)(ProjectList);
export default VisibleProjectList;

