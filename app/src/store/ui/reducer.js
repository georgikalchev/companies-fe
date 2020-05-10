import {
  COMPANY,
  EMPLOYEE,
  JOB_AREA,
  PROJECT,
  SELECT_COMPANY,
  SELECT_EMPLOYEE,
  SELECT_JOB_AREA,
  SELECT_PROJECT,
  TOGGLE_EXPAND_COMPANY,
  TOGGLE_EXPAND_JOB_AREA
} from './actions'

const initialState = ({
  expandedCompanies: [],
  expandedJobAreas: [],
  selected: {
    selectedType: null,
    selectedId: null
  }
})

const updateArray = (element, array) => {
  const index = array.indexOf(element)
  if (index > -1) {
    array.splice(index, 1)
  } else {
    array.push(element)
  }
  return array
}

export const ui = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_EXPAND_COMPANY: {
      const companySet = updateArray(payload, [...state.expandedCompanies])
      return {
        ...state,
        expandedCompanies: companySet
      }
    }
    case TOGGLE_EXPAND_JOB_AREA: {
      const jobAreaSet = updateArray(payload, [...state.expandedJobAreas])
      return {
        ...state,
        expandedJobAreas: jobAreaSet
      }
    }
    case SELECT_COMPANY: {
      const updatedSet = [...state.expandedCompanies]
      if (updatedSet.indexOf(payload) === -1) {
        updatedSet.push(payload)
      }

      return {
        ...state,
        selected: {
          selectedType: COMPANY,
          data: payload
        },
        expandedCompanies: updatedSet
      }
    }
    case SELECT_JOB_AREA: {
      const updatedSet = [...state.expandedJobAreas]
      if (updatedSet.indexOf(payload.id) === -1) {
        updatedSet.push(payload.id)
      }
      return {
        ...state,
        selected: {
          selectedType: JOB_AREA,
          data: payload
        },
        expandedJobAreas: updatedSet
      }
    }
    case SELECT_EMPLOYEE: {
      return {
        ...state,
        selected: {
          selectedType: EMPLOYEE,
          data: payload
        }
      }
    }
    case SELECT_PROJECT: {
      return {
        ...state,
        selected: {
          selectedType: PROJECT,
          data: payload
        }
      }
    }

    default:
      return state
  }
}