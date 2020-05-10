import React from 'react'
import PropTypes from 'prop-types'
import { selectProject } from '../../store/ui/actions'
import { useDispatch } from 'react-redux'

const Project = ({ id, name, department }) => {
  const dispatch = useDispatch()
  const handleSelectingProject = (id) => {
    dispatch(selectProject(id))
  }
  return (
    <li onClick={() => handleSelectingProject({ id })}>
      <h3>{name}</h3>
      <p>{department}</p>
    </li>)
}

Project.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  department: PropTypes.string
}

export default Project