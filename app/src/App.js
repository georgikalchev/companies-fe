import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import { errorHandler, getCompanies, getCompaniesAddresses, getEmployees, getProjects } from './api'
import Navigation from './container/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { saveFetchedCompanies, saveFetchedCompaniesAddresses } from './store/companies/actions'
import { saveFetchedProjects } from './store/projects/actions'
import { saveFetchedEmployees } from './store/employees/actions'
import InformationPanel from './container/information-panel'
import EditPanel from './container/edit-panel'
import { selectEditPanelVisibility, selectMinorErrorVisibility } from './store/ui/selector'
import Header from './container/header'
import { GrList } from 'react-icons/gr'
import { clearSelection, dismiss } from './store/ui/actions'

function App () {
  const dispatch = useDispatch()
  const [isNavigationHidden, setIsNavigationHidden] = useState(window.innerWidth < 1024)
  useEffect(() => {
    Promise.all([
      getCompanies(),
      getCompaniesAddresses(),
      getProjects(),
      getEmployees()
    ]).then(([companies, addresses, projects, employees]) => {
      dispatch(saveFetchedCompanies(companies))
      dispatch(saveFetchedCompaniesAddresses(addresses))
      dispatch(saveFetchedProjects(projects))
      dispatch(saveFetchedEmployees(employees))
      dispatch(clearSelection())
    }).catch(error => {
      errorHandler(error, dispatch)
      dispatch(saveFetchedCompanies([]))
      dispatch(saveFetchedCompaniesAddresses([]))
      dispatch(saveFetchedProjects([]))
      dispatch(saveFetchedEmployees([]))
    })
  }, [dispatch])

  const hideNavigation = () => {
    setIsNavigationHidden(!isNavigationHidden)
  }

  const edit = useSelector(selectEditPanelVisibility)
  const minorError = useSelector(selectMinorErrorVisibility)
  return (
    <div className={styles.App}>
      {minorError && minorError.shouldShow &&
      <div className={styles['minor-error']}>
        <div>
          {minorError.message}
          <button onClick={() => dispatch(dismiss())}>DISMISS</button>
        </div>
      </div>}
      <div
        onClick={hideNavigation}
        className={styles.toggler}>
        <GrList
          style={{ width: '60px', height: '60px' }} />
      </div>
      <aside className={isNavigationHidden ? styles.hide : undefined}>
        <div className={styles.band} />
        <Navigation />
      </aside>
      <div className={styles.body}>
        <Header />
        <section>
          <InformationPanel />
        </section>
        {edit.shouldShowEditPanel && <section className={styles.edit}>
          <EditPanel {...edit} />
        </section>}
      </div>
    </div>
  )
}

export default App
