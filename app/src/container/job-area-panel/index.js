import React from 'react'
import PropTypes from 'prop-types'

const JobAreaPanel = ({ data }) => {
  return (
    <div>
      {data.employeeCount} employees working on {data.activeProjectsForJobArea} projects
    </div>
  )
}

JobAreaPanel.propTypes = {
  data: PropTypes.shape({
    employeeCount: PropTypes.number,
    activeProjectsForJobArea: PropTypes.number
  })
}

export default JobAreaPanel