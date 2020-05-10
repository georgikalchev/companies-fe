import React from 'react'
import styles from '../../App.module.css'
import { useSelector } from 'react-redux'
import { selectSelected } from '../ui/selector'
import { COMPANY, JOB_AREA } from '../ui/actions'

const Header = () => {
  const selected = useSelector(selectSelected)
  const showMessage = (selected) => {
    switch (selected.selectedType) {
      case COMPANY:
        return <h1>Company Details</h1>
      case JOB_AREA:
        return <h1>{selected.data.jobArea} Information</h1>
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