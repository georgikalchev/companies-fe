import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectJobAreaForCompany, selectProjectsForCompany } from '../../store/employees/selectors'
import NavNode from '../../component/nav-node'
import { expandJobArea, selectJobArea } from '../../store/ui/actions'
import { selectExpandedJobAreas } from '../../store/ui/selector'
import EmployeeNode from '../employee-node'

const JobAreaNode = ({ companyId, selectedCompanies }) => {
  const dispatch = useDispatch()
  const expandedJobAreas = useSelector(selectExpandedJobAreas)
  const companyJobAreas = useSelector(state => selectJobAreaForCompany(state, companyId))
  const companyProjects = useSelector(state => selectProjectsForCompany(state, companyId))
  const toggleExpand = (id) => {
    dispatch(expandJobArea(id))
  }
  const handleSelectingJobArea = (data) => {
    dispatch(selectJobArea(data))
  }
  const createPayload = (id, employees, jobArea) => {
    const activeProjectsForJobArea = new Set()
    companyProjects.forEach(project => {
      employees.forEach(employee => {
        if (project.employeesId.indexOf(employee.id) > -1) {
          activeProjectsForJobArea.add(project.id)
        }
      })
    })
    return {
      id,
      employeeCount: employees ? employees.length : 0,
      activeProjectsForJobArea: activeProjectsForJobArea.size,
      jobArea
    }
  }
  if (selectedCompanies.has(companyId) && Object.keys(companyJobAreas).length === 0) {
    return <ul><li>nothing to see here</li></ul>
  }
  return (
    <React.Fragment>
      {selectedCompanies.has(companyId) && companyJobAreas && <ul>
        {
          Object.entries(companyJobAreas).map(([jobArea, employees]) => {
            const id = companyId + jobArea
            const payload = createPayload(id, employees, jobArea)
            return (<NavNode
              key={id}
              element={{ name: jobArea, id }}
              isExpanded={expandedJobAreas.has(id)}
              toggleExpand={toggleExpand}
              handleSelect={() => handleSelectingJobArea(payload)}
            >
              {expandedJobAreas.has(id) && <EmployeeNode employees={employees} />}
            </NavNode>)
          })
        }
      </ul>
      }
    </React.Fragment>
  )
}

export default JobAreaNode