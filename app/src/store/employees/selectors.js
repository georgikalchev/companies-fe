import { createSelector } from 'reselect'

export const selectJobAreaForCompany = createSelector(
  state => state.employees.employees,
  (_, companyId) => companyId,
  (employees, companyId) => {
    return employees.filter(employee => employee.companyId === companyId)
      .reduce((jobAreaToEmployee, employee) => {
        let jobArea = jobAreaToEmployee[employee.jobArea]
        if (!jobArea) {
          jobArea = []
          jobAreaToEmployee[employee.jobArea] = jobArea
        }
        jobArea.push(employee)
        return jobAreaToEmployee
      }, {})
  }
)

export const selectProjectsForCompany = createSelector(
  state => state.projects.projects,
  (_, companyId) => companyId,
  (projects, companyId) => {
    return projects.filter(project => project.companyId === companyId)
  }
)

export const selectEmployeeData = createSelector(
  state => state.projects.projects,
  (_, data) => data,
  (projects, data) => {
    console.log(data)
    return {
      details: data,
      projects:
        projects.filter(project => project.companyId === data.companyId)
          .filter(project => {
            console.log(project.employeesId, data.id)
            return project.employeesId.indexOf(data.id) > -1
          })
    }
  }
)