import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { selectEmployee } from '../../store/ui/actions'
import styles from './styles.module.css'

const Employee = ({ employee }) => {
  const dispatch = useDispatch()
  const handleSelectingEmployee = (employee) => {
    dispatch(selectEmployee(employee))
  }
  return (
    <li
      className={styles.employee}
      onClick={() => handleSelectingEmployee(employee)}>
      {employee.firstName} {employee.lastName}
    </li>
  )
}

Employee.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string,
    firsName: PropTypes.string,
    lastName: PropTypes.string
  })

}

export default Employee