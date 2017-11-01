import React from 'react';
import ProjectList from '../components/ProjectList';
import { connect } from 'react-redux';
import * as actions from '../actions/';

const getVisibleProjects = ({ projects, statusFilter, nameFilter }) => {
  if (statusFilter !== 'all' || nameFilter.length > 0) {

    return projects.map(project => {
      let tempVacancies = project.vacancies;

      if (statusFilter !== 'all') {
        tempVacancies = filterByStatus(tempVacancies, statusFilter);
      }

      if (nameFilter.length > 0) {
        tempVacancies = filterByName(tempVacancies, nameFilter);
      }

      return Object.assign({}, project, {
        vacancies: tempVacancies
      });
    }).filter(project => {
      return project.vacancies.length > 0
    });
  }

  return projects;
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
    projects: getVisibleProjects(state)
  }
};

export default connect(mapStateToProps)(ProjectList);