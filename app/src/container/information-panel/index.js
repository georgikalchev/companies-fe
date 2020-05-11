import React from 'react'
import { COMPANY, EMPLOYEE, ERROR, JOB_AREA, PROJECT } from '../../store/ui/actions'
import CompanyPanel from '../company-panel'
import JobAreaPanel from '../job-area-panel'
import EmployeePanel from '../employee-panel'
import ProjectPanel from '../project-panel'
import { useSelector } from 'react-redux'
import { selectSelected } from '../../store/ui/selector'
import styles from './styles.module.css'

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
    case ERROR:
      return (
        <div className={styles.default}>
          <h1>Sorry there was a problem retrieving the data {selected.data}</h1>
          <p>please refresh your browser or try again later</p>
        </div>
      )
    default: {
      return (
        <div className={styles.default}>
          <h1>
            SELECT FROM THE THREE ON THE LEFT TO SEE INFORMATION ABOUT
          </h1>
          <ul>
            <li>each company</li>
            <ul>
              <li>it's job areas</li>
              <ul>
                <li>and the employees inside</li>
              </ul>
            </ul>
          </ul>

        </div>
      )
    }
  }
}

export default InformationPanel