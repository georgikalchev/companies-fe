export const SAVE_FETCHED_COMPANIES = 'SAVE_FETCHED_COMPANIES'
export const SAVE_FETCHED_COMPANIES_ADDRESSES = 'SAVE_FETCHED_COMPANIES_ADDRESSES'

export function saveFetchedCompanies (payload) {
  return {
    payload,
    type: SAVE_FETCHED_COMPANIES
  }
}

export function saveFetchedCompaniesAddresses (payload) {
  return {
    payload,
    type: SAVE_FETCHED_COMPANIES_ADDRESSES
  }
}