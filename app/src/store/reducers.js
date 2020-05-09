import { combineReducers } from 'redux'
import companies from './companies/reducer'
import { ui } from './ui/reducer'
import { employeesReducer } from './employees/reducer'
import { projectsReducer } from './projects/reducer'

const rootReducer = combineReducers({
  companies,
  ui,
  employees: employeesReducer,
  projects: projectsReducer
})

export default rootReducer
