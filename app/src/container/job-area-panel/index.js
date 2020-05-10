import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

const JobAreaPanel = ({ data }) => {
  const { jobArea: ja, employeeCount: ec, activeProjectsForJobArea: ap } = data
  const handlePlural = (count, single) => {
    return count > 1 ? `${count} ${single + 's'}` : `${count} ${single}`
  }
  return (
    <div className={styles.container}>
      <p>
        {ja} has {handlePlural(ec, 'employee', 'employees')} working on {handlePlural(ap, 'project')}
      </p>
    </div>
  )
}

JobAreaPanel.propTypes = {
  data: PropTypes.shape({
    jobArea: PropTypes.string,
    employeeCount: PropTypes.number,
    activeProjectsForJobArea: PropTypes.number
  })
}

export default JobAreaPanel