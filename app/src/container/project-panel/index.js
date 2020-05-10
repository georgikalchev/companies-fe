import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectProject } from '../../store/projects/selectors'
import EmployeeNode from '../employee-node'

const ProjectPanel = ({ data }) => {
  const { project, employees } = useSelector(state => selectProject(state, data.id))
  if (!project) {
    return (
      <h1>sorry we could not find information about this project</h1>
    )
  }
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.department}</p>
      <p>assigned employees:</p>
      <EmployeeNode
        employees={employees}
      />
    </div>
  )
}

ProjectPanel.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string
  })
}

export default ProjectPanel