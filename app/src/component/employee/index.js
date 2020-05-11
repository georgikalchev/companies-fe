import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployee } from '../../store/ui/actions'
import styles from './styles.module.css'
import cx from 'classnames'
import { selectSelected } from '../../store/ui/selector'

const Employee = ({ employee, isInsideTheProjectPanel }) => {
  const dispatch = useDispatch()
  const selected = useSelector(selectSelected)
  const [isSelected, setIsSelected] = useState(false)
  useEffect(() => {
      if (employee && employee.id && selected && selected.data) {
        if (employee.id === selected.data.id) {
          setIsSelected(true)
        } else {
          setIsSelected(false)
        }
      }
    }, [employee, selected]
  )

  const handleSelectingEmployee = (employee) => {
    dispatch(selectEmployee(employee))
  }
  return (
    <li
      className={cx(styles.employee, isSelected && !isInsideTheProjectPanel && styles.selected,
        isInsideTheProjectPanel && styles.detailed)}
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
  }),
  isInsideTheProjectPanel: PropTypes.bool

}

export default Employee