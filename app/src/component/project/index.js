import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { selectProject } from '../../store/ui/actions'
import { useDispatch } from 'react-redux'
import { GrClearOption, GrEdit } from 'react-icons/gr'
import cx from 'classnames'

const Project = ({ id, name, department }) => {
  const dispatch = useDispatch()
  const handleSelectingProject = (id) => {
    dispatch(selectProject(id))
  }
  return (
    <li className={styles.project}>
      <div className={styles.info} onClick={() => handleSelectingProject({ id })}>
        <h3>{name}</h3>
        <p>{department}</p>
      </div>
      <div className={styles.control}>
        <span className={styles.remove}>
          <GrEdit />
          <span className={cx(styles.tooltiptext, styles.ok)}>EDIT</span>
        </span>
        <span className={styles.remove}>
          <GrClearOption />
          <span className={cx(styles.tooltiptext, styles.danger)}>REMOVE</span>
        </span>
      </div>
    </li>)
}

Project.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  department: PropTypes.string
}

export default Project