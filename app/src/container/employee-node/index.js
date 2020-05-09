import React from 'react'
import Employee from '../../component/employee'

const EmployeeNode = ({ employees }) => {

  return (
    <ul>
      {employees.map(employee => (
        <Employee key={employee.id} employee={employee} />
      ))}

    </ul>
  )
}

export default EmployeeNode