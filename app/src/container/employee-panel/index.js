import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectEmployeeData } from '../../store/employees/selectors'
import Project from '../../component/project'

const EmployeePanel = ({ data }) => {
  const { projects } = useSelector((state) => selectEmployeeData(state, data))

  return (
    <div>
      <h1>{data.firstName} {data.lastName}</h1>
      <p>{data.dateOfBirth}</p>
      <h3>{data.jobTitle}</h3>
      <p>{data.jobArea} {data.jobType}</p>
      <h2>current projects</h2>
      <ul>
        {projects.map(project => (
          <Project
            key={project.id}
            name={project.name}
            department={project.department}
            id={project.id}
          />
        ))}
      </ul>

    </div>
  )
}

EmployeePanel.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dateOfBirth: PropTypes.string,
    jobTitle: PropTypes.string,
    jobArea: PropTypes.string,
    jobType: PropTypes.string
  })
}

export default EmployeePanel