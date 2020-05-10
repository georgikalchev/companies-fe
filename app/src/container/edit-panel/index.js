import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectEmployeesForCompany } from '../../store/employees/selectors'
import { selectProject } from '../../store/projects/selectors'
import styles from './styles.module.css'
import EmployeeList from '../../component/employee-list'
import { GrFormClose, GrUserAdd } from 'react-icons/gr'

const EditPanel = ({ projectId, companyId }) => {
  const projectDetails = useSelector(state => selectProject(state, projectId))
  const employeesInTheCompany = useSelector(state => selectEmployeesForCompany(state, companyId))
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [employees, setEmployees] = useState([])
  const [availableEmployees, setAvailableEmployees] = useState([])

  useEffect(() => {
    const current = employees.map(emp => emp.id)
    const filtered = employeesInTheCompany.filter(employee => current.indexOf(employee.id) === -1)
    console.log(filtered)
    setAvailableEmployees(filtered)
  }, [employeesInTheCompany, employees])

  useEffect(() => {
    setName(projectDetails.project.name)
    setDepartment(projectDetails.project.department)
    setEmployees(projectDetails.employees)
  }, [projectDetails])
  const handleAddingEmployee = (employee) => {
    setEmployees([...employees, employee])
  }
  const handleRemovingEmployee = (employee) => {
    console.log(employee)
    const filtered = employees.filter(emp => emp.id !== employee.id)
    setEmployees(filtered)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  const handleReset = () => {
    console.log('reset')
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>EDIT DATA HERE</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label>name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>department:</label>
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
          <h3>Assigned employees:</h3>
          <ul>
            <EmployeeList
              list={employees}
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
          <button type='button' value='REMOVE PROJECT' className={styles.danger}>
            REMOVE
          </button>
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

export default EditPanel