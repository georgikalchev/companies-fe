import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectCompanyDetails } from '../../store/companies/selectors'
import Project from '../../component/project'

const CompanyPanel = ({ companyId }) => {
  const companyDetails = useSelector(state => selectCompanyDetails(state, companyId))
  if (!companyDetails) {
    return null
  }

  const { company, address, projects } = companyDetails
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.name}>
          <h1>{company.name}</h1>
          <p>{company.business}</p>
        </div>
        <div className={styles.address}>
          <p>{address.country}, {address.state}</p>
          <p>{address.city}, {address.street}</p>
        </div>
      </div>
      <div className={styles.projects}>
        <h2>PROJECTS</h2>
        <ul>
          {projects.map(project => (
            <Project
              key={project.id}
              {...project} />
          ))}
        </ul>
      </div>
    </div>
  )
}

CompanyPanel.propTypes = {
  companyId: PropTypes.string
}

export default CompanyPanel