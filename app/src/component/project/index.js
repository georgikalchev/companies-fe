import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { edit, selectProject } from '../../store/ui/actions'
import { useDispatch } from 'react-redux'
import { GrBook, GrClearOption, GrEdit, GrIntegration } from 'react-icons/gr'
import cx from 'classnames'
import { saveFetchedProjects } from '../../store/projects/actions'
import { callDeleteProject, errorHandler } from '../../api'

const Project = ({ id, name, department, companyId, companyName, canBeEdited, forCreation }) => {
  const dispatch = useDispatch()
  const handleSelectingProject = () => {
    if (forCreation) {
      dispatch(edit({ companyId }))
    } else {
      dispatch(selectProject({ id, companyId, companyName }))
    }
  }

  const handleEditProject = (id) => {
    dispatch(edit({ projectId: id, companyId: companyId }))
  }

  const handleRemovingProject = (id) => {
    Promise.resolve(callDeleteProject(id))
      .then(res => {
        if (Array.isArray(res)) {
          dispatch(saveFetchedProjects(res))
        }
      })
      .catch(e => {
        errorHandler(e, dispatch)
      })
  }

  return (
    <li className={styles.project}>
      <div className={cx(styles.info, forCreation && styles.add)} onClick={handleSelectingProject}>
        <h3>{name}</h3>
        <p>{department}</p>
      </div>
      <div className={styles.control}>
        {forCreation
          ? <span className={styles.option} onClick={handleSelectingProject}>
          <GrBook />
          <span className={cx(styles.tooltip, styles.open)}>CREATE</span>
        </span>
          : <span className={styles.option} onClick={handleSelectingProject}>
          <GrIntegration />
          <span className={cx(styles.tooltip, styles.open)}>DETAILS</span>
        </span>}
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
  companyId: PropTypes.string,
  companyName: PropTypes.string,
  department: PropTypes.string,
  forCreation: PropTypes.bool
}

export default Project