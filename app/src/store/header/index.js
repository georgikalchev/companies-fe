import React from 'react'
import styles from '../../App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelected } from '../ui/selector'
import { COMPANY, EMPLOYEE, JOB_AREA, PROJECT, selectCompany } from '../ui/actions'

const Header = () => {
  const selected = useSelector(selectSelected)
  const dispatch = useDispatch()
  const handleSelectingCompany = () => {
    dispatch(selectCompany(selected.data.companyId))
  }
  console.log({ selected })
  const showMessage = (selected) => {
    switch (selected.selectedType) {
      case COMPANY:
        return <h1>Company Details</h1>
      case JOB_AREA:
        return <h1>{selected.data.jobArea} Information</h1>
      case PROJECT:
        return <h1><span onClick={handleSelectingCompany}>{selected.data.companyName}'s</span> Project</h1>
      case EMPLOYEE:
        return <h1>Employee Info</h1>
      default:
        return <h1>Welcome</h1>
    }
  }
  return (
    <header className={styles['App-header']}>
      <h1>Companies catalogue</h1>
      {showMessage(selected)}
    </header>
  )
}

export default Header