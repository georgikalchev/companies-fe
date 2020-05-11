import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllCompanies } from '../../store/companies/selectors'
import CompanyNode from '../company-node'

const Navigation = () => {
  const companies = useSelector(selectAllCompanies)

  return (
    <div>
      <CompanyNode
        companies={companies}
      />
    </div>
  )
}

export default Navigation