import { SAVE_FETCHED_COMPANIES, SAVE_FETCHED_COMPANIES_ADDRESSES } from './actions'

const initialState = {
  companies: [],
  companiesAddresses: []
}

const companiesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SAVE_FETCHED_COMPANIES: {
      return {
        ...state,
        companies: payload
      }
    }
    case SAVE_FETCHED_COMPANIES_ADDRESSES: {
      return {
        ...state,
        companiesAddresses: payload
      }
    }

    default:
      return state
  }
}

export default companiesReducer