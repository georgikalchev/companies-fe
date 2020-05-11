import { SAVE_FETCHED_PROJECTS, SAVE_PROJECT } from './actions'

const initialState = {
  projects: [],
  companyIdToJobArea: {}
}

export const projectsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SAVE_FETCHED_PROJECTS:
      return {
        ...state,
        projects: payload
      }
    case SAVE_PROJECT:
      const projects = [...state.projects]
      const foundIndex = projects.findIndex(project => project.id === payload.id)
      if (foundIndex === -1) {
        projects.push(payload)
      } else {
        projects.splice(foundIndex, 1, payload)
      }
      return {
        ...state,
        projects
      }

    default:
      return state
  }
}