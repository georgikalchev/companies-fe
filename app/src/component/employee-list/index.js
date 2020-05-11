import React from 'react'
import PropTypes from 'prop-types'

const EmployeeList = ({ list, handler, icon }) => {
  return (
    list.map(item => (
      <li key={item.id}>
        {item.firstName} {item.lastName}
        <span onClick={() => handler(item)}>{icon}</span>
      </li>
    ))
  )
}

EmployeeList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    })
  ),
  handler: PropTypes.func,
  icon: PropTypes.node
}

export default EmployeeList