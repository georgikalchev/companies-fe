export const SELECT_COMPANY = 'SELECT_COMPANY'
export const SELECT_JOB_AREA = 'SELECT_JOB_AREA'
export const SELECT_EMPLOYEE = 'SELECT_EMPLOYEE'
export const SELECT_PROJECT = 'SELECT_PROJECT'
export const COMPANY = 'COMPANY'
export const JOB_AREA = 'JOB_AREA'
export const EMPLOYEE = 'EMPLOYEE'
export const PROJECT = 'PROJECT'
export const TOGGLE_EXPAND_COMPANY = 'TOGGLE_EXPAND_COMPANY'
export const TOGGLE_EXPAND_JOB_AREA = 'TOGGLE_EXPAND_JOB_AREA'

export const expandCompany = (payload) => ({
  payload,
  type: TOGGLE_EXPAND_COMPANY
})
export const expandJobArea = (payload) => ({
  payload,
  type: TOGGLE_EXPAND_JOB_AREA
})

export const selectCompany = (payload) => ({
  payload,
  type: SELECT_COMPANY
})
export const selectJobArea = (payload) => ({
  payload,
  type: SELECT_JOB_AREA
})
export const selectProject = (payload) => ({
  payload,
  type: SELECT_PROJECT
})
export const selectEmployee = (payload) => ({
  payload,
  type: SELECT_EMPLOYEE
})