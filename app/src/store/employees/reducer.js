import { SAVE_FETCHED_EMPLOYEES } from './actions'

const initialState = {
  employees: [],
  companyIdToJobArea: {}
}

export const employeesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SAVE_FETCHED_EMPLOYEES:
      return {
        ...state,
        employees: payload
      }

    default:
      return state
  }
}