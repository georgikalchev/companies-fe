import React from 'react'
import { COMPANY, EMPLOYEE, JOB_AREA, PROJECT } from '../../store/ui/actions'
import CompanyPanel from '../company-panel'
import JobAreaPanel from '../job-area-panel'
import EmployeePanel from '../employee-panel'
import ProjectPanel from '../project-panel'
import { useSelector } from 'react-redux'
import { selectSelected } from '../../store/ui/selector'

const InformationPanel = () => {
  const selected = useSelector(selectSelected)
  switch (selected.selectedType) {
    case COMPANY:
      return <CompanyPanel companyId={selected.data} />
    case JOB_AREA:
      return <JobAreaPanel data={selected.data} />
    case EMPLOYEE:
      return <EmployeePanel data={selected.data} />
    case PROJECT:
      return <ProjectPanel data={selected.data} />
    default: {
      return (
        <div>
          select something to show here
        </div>
      )
    }
  }
}

export default InformationPanel