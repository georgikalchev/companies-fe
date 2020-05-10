import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeData } from '../../store/employees/selectors'
import Project from '../../component/project'
import styles from './styles.module.css'
import { selectCompanyDetails } from '../../store/companies/selectors'
import { selectCompany } from '../../store/ui/actions'

const EmployeePanel = ({ data }) => {
  const dispatch = useDispatch()
  const { company } = useSelector(state => selectCompanyDetails(state, data.companyId))
  const { projects } = useSelector((state) => selectEmployeeData(state, data))
  const formatBirthDate = (date) => {
    const dateObject = new Date(date)
    return `${dateObject.getDate()}.${dateObject.getMonth()}.${dateObject.getFullYear()}`
  }

  const handleSelectingCompany = () => {
    dispatch(selectCompany(company.id))
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <h1>{data.firstName} {data.lastName}</h1>
          <p>{formatBirthDate(data.dateOfBirth)}</p>
        </div>
        <div className={styles.position}>
          <h3>{data.jobTitle} @ <span onClick={handleSelectingCompany}>{company.name}</span></h3>
          <p>Area: {data.jobArea}</p>
          <p>Type: {data.jobType}</p>
        </div>
      </div>
      <div className={styles.projects}>
        <h2>Current Projects</h2>
        <ul>
          {projects.map(project => (
            <Project
              key={project.id}
              name={project.name}
              department={project.department}
              companyId={company.id}
              companyName={company.name}
              id={project.id}
            />
          ))}
        </ul>
      </div>
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