import React from 'react'
import styles from '../../App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelected } from '../../store/ui/selector'
import { clearSelection, COMPANY, EMPLOYEE, ERROR, JOB_AREA, PROJECT, selectCompany } from '../../store/ui/actions'

const Header = () => {
  const selected = useSelector(selectSelected)
  const dispatch = useDispatch()
  const handleSelectingCompany = () => {
    dispatch(selectCompany(selected.data.companyId))
  }
  const showMessage = (selected) => {
    switch (selected.selectedType) {
      case COMPANY:
        return <h2>Company Details</h2>
      case JOB_AREA:
        return <h2>{selected.data.jobArea} Information</h2>
      case PROJECT:
        return <h2><span onClick={handleSelectingCompany}>{selected.data.companyName}'s</span> Project</h2>
      case EMPLOYEE:
        return <h2>Employee Info</h2>
      default:
        return <h2>Welcome</h2>
    }
  }
  return (
    <header className={styles['App-header']}>
      <h1 onClick={() => selected.selectedType !== ERROR && dispatch(clearSelection({}))}>Companies catalogue</h1>
      {showMessage(selected)}
    </header>
  )
}

export default Header