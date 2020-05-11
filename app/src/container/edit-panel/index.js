import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeesForCompany } from '../../store/employees/selectors'
import { selectProject } from '../../store/projects/selectors'
import styles from './styles.module.css'
import EmployeeList from '../../component/employee-list'
import { GrFormClose, GrUserAdd } from 'react-icons/gr'
import { cancelProjectManipulation, saveFetchedProjects } from '../../store/projects/actions'
import { callDeleteProject, callSaveProject, errorHandler } from '../../api'

const EditPanel = ({ projectId, companyId }) => {
  const dispatch = useDispatch()
  const projectDetails = useSelector(state => selectProject(state, projectId))
  const employeesInTheCompany = useSelector(state => selectEmployeesForCompany(state, companyId))
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [selectedEmployees, setSelectedEmployees] = useState([])
  const [availableEmployees, setAvailableEmployees] = useState([])
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    const current = selectedEmployees.map(emp => emp.id)
    const filtered = employeesInTheCompany.filter(employee => current.indexOf(employee.id) === -1)
    setAvailableEmployees(filtered)
  }, [employeesInTheCompany, selectedEmployees])

  useEffect(() => {
    if (projectId) {
      setName(projectDetails.project.name)
      setDepartment(projectDetails.project.department)
      setSelectedEmployees(projectDetails.employees)
    }
  }, [projectDetails, projectId])
  const handleAddingEmployee = (employee) => {
    setSelectedEmployees([...selectedEmployees, employee])
  }
  const handleRemovingEmployee = (employee) => {
    const filtered = selectedEmployees.filter(emp => emp.id !== employee.id)
    setSelectedEmployees(filtered)
  }
  const areProjectDetailsValid = () => {
    const areValid = companyId && companyId.trim().length > 0 && name && name.trim().length > 0 && department &&
      department.trim().length
    setHasError(!areValid)
    return areValid

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (areProjectDetailsValid()) {
      const project = {
        id: projectId,
        companyId,
        name,
        department,
        employeesId: selectedEmployees.map(employee => employee.id)
      }
      Promise.resolve(callSaveProject(project))
        .then(res => {
          if (Array.isArray(res)) {
            dispatch(saveFetchedProjects(res))
            dispatch(cancelProjectManipulation(project))
          }
        })
        .catch(e => {
            errorHandler(e, dispatch)
          }
        )
    }

  }
  const handleReset = () => {
    dispatch(cancelProjectManipulation())
  }
  const handleDeleteProject = (id) => {
    Promise.resolve(callDeleteProject(id))
      .then(res => {
        if (Array.isArray(res)) {
          dispatch(saveFetchedProjects(res))

        }
      })
      .catch(e => {
          errorHandler(e, dispatch)
        }
      ).finally(dispatch(cancelProjectManipulation()))
  }
  const isNewProject = !projectId
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {isNewProject ? <h1>CREATE NEW PROJECT</h1> : <h1>EDIT DATA HERE</h1>}
        <form onSubmit={handleSubmit} onReset={handleReset}>
          {hasError && <span className={styles.danger}>Please make sure both the name and the department of the project are set</span>}
          <label>name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>department:</label>
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
          <h3>Assigned employees:</h3>
          <ul>
            <EmployeeList
              list={selectedEmployees}
              handler={handleRemovingEmployee}
              icon={<GrFormClose size={22} />}
            />
          </ul>
          <button type="submit" value='SAVE' className={styles.save}>
            SAVE
          </button>
          <button type='reset' className={styles.cancel}>
            Cancel
          </button>
          {!isNewProject && <button
            onClick={() => handleDeleteProject(projectId)}
            type='button' value='REMOVE PROJECT' className={styles.danger}>
            REMOVE
          </button>}
        </form>

      </div>
      <div className={styles.aside}>
        <h3> Available employees:</h3>
        <ul>
          <EmployeeList
            list={availableEmployees}
            handler={handleAddingEmployee}
            icon={<GrUserAdd size={22} />}
          />
        </ul>
      </div>
    </div>
  )
}
EditPanel.propTypes = {
  projectId: PropTypes.string,
  companyId: PropTypes.string
}

export default EditPanel