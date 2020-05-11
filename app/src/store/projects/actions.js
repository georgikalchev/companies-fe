export const SAVE_FETCHED_PROJECTS = 'SAVE_FETCHED_PROJECTS'
export const SAVE_PROJECT = 'SAVE_PROJECT'
export const CANCEL_PROJECT_MANIPULATION = 'CANCEL_PROJECT_MANIPULATION'

export const saveFetchedProjects = (payload) => ({
  payload,
  type: SAVE_FETCHED_PROJECTS
})

export const saveProject = (payload) => ({
  type: SAVE_PROJECT,
  payload
})

export const cancelProjectManipulation = () => ({
  type: CANCEL_PROJECT_MANIPULATION
})
