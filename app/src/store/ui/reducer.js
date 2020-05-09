import {
  COMPANY,
  EMPLOYEE,
  JOB_AREA, PROJECT,
  SELECT_COMPANY,
  SELECT_EMPLOYEE,
  SELECT_JOB_AREA, SELECT_PROJECT,
  TOGGLE_EXPAND_COMPANY,
  TOGGLE_EXPAND_JOB_AREA
} from './actions'

const initialState = ({
  expandedCompanies: new Set(),
  expandedJobAreas: new Set(),
  selected: {
    selectedType: null,
    selectedId: null
  }
})

export const ui = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_EXPAND_COMPANY: {
      const companySet = new Set([...state.expandedCompanies])
      console.log(payload)
      if (companySet.has(payload)) {
        companySet.delete(payload)
      } else {
        companySet.add(payload)
      }
      return {
        ...state,
        expandedCompanies: companySet
      }
    }
    case TOGGLE_EXPAND_JOB_AREA: {
      const jobAreaSet = new Set([...state.expandedJobAreas])
      if (jobAreaSet.has(payload)) {
        jobAreaSet.delete(payload)
      } else {
        jobAreaSet.add(payload)
      }
      return {
        ...state,
        expandedJobAreas: jobAreaSet
      }
    }
    case SELECT_COMPANY: {
      const updatedSet = new Set([...state.expandedCompanies])
      updatedSet.add(payload)
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
      const updatedSet = new Set([...state.expandedJobAreas])
      updatedSet.add(payload.id)
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
      console.log(payload)
      return {
        ...state,
        selected: {
          selectedType: EMPLOYEE,
          data: payload
        }
      }
    }
    case SELECT_PROJECT: {
      console.log(payload)
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