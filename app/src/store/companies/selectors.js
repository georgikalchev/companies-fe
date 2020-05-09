import { createSelector } from 'reselect'

export const selectAllCompanies = createSelector(
  state => state.companies,
  companies => {
    return companies.companies
  }
)

export const selectCompanyDetails = createSelector(
  state => state.companies.companies,
  state => state.companies.companiesAddresses,
  state => state.projects.projects,
  (_, companyId) => companyId,
  (companies, addresses, projects, companyId) => {
    return {
      company: companies.filter(company => company.id === companyId)[0],
      address: addresses.filter(address => address.companyId === companyId)[0],
      projects: projects.filter(projects => projects.companyId === companyId)
    }
  }
)