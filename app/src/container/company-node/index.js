import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NavNode from '../../component/nav-node'
import { useDispatch, useSelector } from 'react-redux'
import { selectExpandedCompanies } from '../../store/ui/selector'
import { expandCompany, selectCompany } from '../../store/ui/actions'
import JobAreaNode from '../job-area-node'

const CompanyNode = ({ companies }) => {
  const dispatch = useDispatch()
  const expandedCompanies = useSelector(selectExpandedCompanies)
  const handleSelectingCompany = (companyId) => {
    dispatch(selectCompany(companyId))
  }

  const toggleExpand = (id) => {
    dispatch(expandCompany(id))
  }
  useEffect(() => {
    if (companies && companies.length > 0) {
      setLoading(false)
    }
  }, [companies])
  const [loading, setLoading] = useState(true)
  return (
    <ul>
      {
        loading ? <h1>LOADING</h1> : companies.map(company => {
          return (
            <NavNode
              key={company.id}
              element={company}
              isExpanded={expandedCompanies.indexOf(company.id) > -1}
              toggleExpand={toggleExpand}
              handleSelect={() => handleSelectingCompany(company.id)}
            >
              <JobAreaNode
                companyId={company.id}
                selectedCompanies={expandedCompanies}
              />
            </NavNode>
          )
        })
      }
    </ul>
  )
}
CompanyNode.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      business: PropTypes.string,
      slogan: PropTypes.string
    })
  )
}

export default CompanyNode