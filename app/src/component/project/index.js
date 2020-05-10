import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { edit, selectProject } from '../../store/ui/actions'
import { useDispatch } from 'react-redux'
import { GrClearOption, GrEdit, GrIntegration } from 'react-icons/gr'
import cx from 'classnames'

const Project = ({ id, name, department, companyId, companyName, canBeEdited }) => {
  const dispatch = useDispatch()
  const handleSelectingProject = () => {
    dispatch(selectProject({ id, companyId, companyName }))
  }

  const handleEditProject = (id) => {
    dispatch(edit({ projectId: id, companyId: companyId }))
  }

  const handleRemovingProject = (id) => {
    // dispatch(removeProject(id))
  }

  return (
    <li className={styles.project}>
      <div className={styles.info} onClick={handleSelectingProject}>
        <h3>{name}</h3>
        <p>{department}</p>
      </div>
      <div className={styles.control}>
        <span className={styles.option} onClick={handleSelectingProject}>
          <GrIntegration />
          <span className={cx(styles.tooltip, styles.open)}>DETAILS</span>
        </span>
        {canBeEdited && (
          <React.Fragment>
        <span className={styles.option} onClick={() => handleEditProject(id)}>
          <GrEdit />
          <span className={cx(styles.tooltip, styles.edit)}>EDIT</span>
        </span>
            <span className={styles.option} onClick={() => handleRemovingProject(id)}>
          <GrClearOption />
          <span className={cx(styles.tooltip, styles.danger)}>REMOVE</span>
        </span>
          </React.Fragment>
        )}

      </div>
    </li>)
}

Project.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  department: PropTypes.string
}

export default Project