import { createSelector } from 'reselect'

export const selectProject = createSelector(
  state => state.projects.projects,
  state => state.employees.employees,
  (_, data) => data,
  (projects, employees, data) => {
    const foundProject = projects.find(project => project.id === data)
    const foundEmployees = []
    if (foundProject && foundProject.employeesId && foundProject.employeesId.length > 0) {
      employees.forEach(employee => {
        if (foundProject.employeesId.indexOf(employee.id) > -1) {
          foundEmployees.push(employee)
        }
      })
    }

    return {
      project: foundProject,
      employees: foundEmployees
    }
  }
)