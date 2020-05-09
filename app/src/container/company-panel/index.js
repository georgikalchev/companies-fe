import React from 'react'
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
    <div>
      <h1>{company.name}</h1>
      <p>{company.business}</p>
      <div>
        <h3>Address:</h3>
        <p>city: {address.city}</p>
        <p>country:{address.country}</p>
        <p>street: {address.street}</p>
        <p>state:{address.state}</p>
      </div>
      <h2>projects</h2>
      <ul>
        {projects.map(project => (
          <Project
            key={project.id}
            {...project} />
        ))}
      </ul>
    </div>
  )
}

CompanyPanel.propTypes = {
  companyId: PropTypes.string
}

export default CompanyPanel