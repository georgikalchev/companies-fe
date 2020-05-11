import React from 'react'
import PropTypes from 'prop-types'
import Employee from '../../component/employee'

const EmployeeNode = ({ employees, isInsideTheProjectPanel }) => {

  return (
    <ul>
      {employees.map(employee => (
        <Employee key={employee.id} employee={employee} isInsideTheProjectPanel={isInsideTheProjectPanel} />
      ))}

    </ul>
  )
}
Employee.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  })),
  isInsideTheProjectPanel: PropTypes.bool
}
export default EmployeeNode