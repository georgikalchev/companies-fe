import { SAVE_FETCHED_PROJECTS } from './actions'

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
    default:
      return state
  }
}