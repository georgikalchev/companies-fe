import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import { getCompanies, getCompaniesAddresses, getEmployees, getProjects } from './api'
import Navigation from './container/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { saveFetchedCompanies, saveFetchedCompaniesAddresses } from './store/companies/actions'
import { saveFetchedProjects } from './store/projects/actions'
import { saveFetchedEmployees } from './store/employees/actions'
import InformationPanel from './container/information-panel'
import EditPanel from './container/edit-panel'
import { selectEditPanelVisibility } from './store/ui/selector'
import Header from './store/header'
import { GrList } from 'react-icons/gr'

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
    }).catch(error => {
      console.log(error)
    })
  }, [dispatch])

  const hideNavigation = () => {
    setIsNavigationHidden(!isNavigationHidden)
  }

  const edit = useSelector(selectEditPanelVisibility)
  return (
    <div className={styles.App}>
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
