import React, { Component } from 'react';
import VacancyList from './VacancyList';
import {formatVacancyCount} from '../helpers/';
import TextButton from './TextButton';
import * as actions from '../actions/';
import { connect } from 'react-redux';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    }

    this.onToggleProject = this.onToggleProject.bind(this);
  }

  onToggleProject() {
    this.setState(prevState => ({ toggled: !prevState.toggled }));
  }

  render() {
    let statusClassName = '',
    toggledClassName = '';

    if (!this.props.project.status) {
      statusClassName = '_closed';
    }

    if (this.state.toggled) {
      toggledClassName = '_toggled';
    }

    return (
      <li className={`entry ${statusClassName} ${toggledClassName}`}>
        <div className="entry__title" onClick={this.onToggleProject}>{this.props.project.name}</div>
        <div className="entry-details">
          <div className="entry-details__count">{formatVacancyCount(this.props.project.vacancies.length, 'вакансия', 'вакансии', 'вакансий')}</div>
          { this.props.project.status ? (
              <TextButton buttonType='addVacancy' onClickHandler={() => this.props.onVacancyAdd(this.props.project.id)} />
            ) : (
              <div className="entry-details__status _closed">Проект закрыт, сотрудники наняты</div>
            ) }
          <div className="entry-details__buttons">
            <TextButton 
              status={this.props.project.status}
              buttonType='toggle'
              contentType='project'
              onClickHandler={() => this.props.onProjectToggle(this.props.project.id)} />
            <TextButton 
              buttonType='delete'
              contentType='project'
              onClickHandler={() => this.props.onProjectRemove(this.props.project.id)} />
          </div>
        </div>
        { this.state.toggled ? (
          <VacancyList items={this.props.project.vacancies} projectId={this.props.project.id} />
        ) : null }
      </li>
    )
  }
}

const dispatchToProps = (dispatch) =>  {
  return {
    onProjectToggle: id => {
      dispatch(actions.toggleProject(id))
    },

    onProjectRemove: id => {
      dispatch(actions.removeProject(id))
    },

    onVacancyAdd: (id) => dispatch(actions.showModal('CREATE_MODAL', {
        createType: 'vacancy',
        title: 'Новая вакансия',
        placeholder: 'Название вакансии',
        projectId: id
    }))
  }
}

export default connect(null, dispatchToProps)(Project);