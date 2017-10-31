import React from 'react';
import ProjectList from '../components/ProjectList';
import { connect } from 'react-redux';
import * as actions from '../actions/';

const getVisibleProjects = (projects, statusFilter, nameFilter) => {
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
    if (statusFilter === 'all') return vacancies;
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
    onProjectToggle: id => {
      dispatch(actions.toggleProject(id))
    },

    onProjectRemove: id => {
      dispatch(actions.removeProject(id))
    },

    onVacancyToggle: (id, projectId) => {
      dispatch(actions.toggleVacancy(id, projectId))
    },

    onVacancyRemove: (id, projectId) => {
      dispatch(actions.removeVacancy(id, projectId))
    },

    onVacancyAdd: (id) => dispatch(actions.showModal('CREATE_MODAL', {
        createType: 'vacancy',
        title: 'Новая вакансия',
        placeholder: 'Название вакансии',
        projectId: id
    }))
  }
};

const VisibleProjectList = connect(mapStateToProps, mapDispatchToProps)(ProjectList);
export default VisibleProjectList;

