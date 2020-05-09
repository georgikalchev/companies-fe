import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllCompanies } from '../../store/companies/selectors'
import CompanyNode from '../company-node'

const Navigation = () => {
  const companies = useSelector(selectAllCompanies)
  useEffect(() => {
    if (companies && companies.length > 0) {
      setLoading(false)
    }
  }, [companies])
  const [loading, setLoading] = useState(true)

  return (
    <div>
      <CompanyNode
        companies={companies}
      />
    </div>
  )
}

export default Navigation