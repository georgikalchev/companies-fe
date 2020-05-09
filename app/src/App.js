import React, { useEffect } from 'react'
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

function App () {
  const dispatch = useDispatch()
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
  const { shouldShowEditPanel } = useSelector(selectEditPanelVisibility)
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.body}>
        <aside>
          <Navigation />
        </aside>
        <section>
          <InformationPanel />
        </section>
        {shouldShowEditPanel && <section>
          <EditPanel />
        </section>}
      </div>
    </div>
  )
}

export default App
