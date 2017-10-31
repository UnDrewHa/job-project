export function addProject (name, id) {
  return {
    type: 'ADD_PROJECT',
    name,
    id
  }
}

export function removeProject (id) {
  return {
    type: 'REMOVE_PROJECT',
    id
  }
}

export function toggleProject (id) {
  return {
    type: 'TOGGLE_PROJECT',
    id
  }
}

export function addVacancy (name, projectId, id) {
  return {
    type: 'ADD_VACANCY',
    name,
    id,
    projectId
  }
}

export function removeVacancy (id, projectId) {
  return {
    type: 'REMOVE_VACANCY',
    id,
    projectId
  }
}

export function toggleVacancy (id, projectId) {
  return {
    type: 'TOGGLE_VACANCY',
    id,
    projectId
  }
}

export function filterVacancyByName (name) {
  return {
    type: 'FILTER_VACANCY_BY_NAME',
    name
  }
}

export function filterVacancyByStatus (status) {
  return {
    type: 'FILTER_VACANCY_BY_STATUS',
    status
  }
}

export function showModal (modalType, modalProps) {
  return {
    type: 'SHOW_MODAL',
    modalType,
    modalProps
  }
}

export function hideModal () {
  return {
    type: 'HIDE_MODAL'
  }
}

