export function getCompanies () {
  return fetch('./data/companies.json')
    .then(r => r.json())
}

export function getCompaniesAddresses () {
  return fetch('./data/company-addresses.json')
    .then(r => r.json())
}

export function getProjects () {
  return fetch('./data/projects.json')
    .then(data => data.json())
}

export function getEmployees () {
  return fetch('./data/employees.json')
    .then(data => data.json())
}