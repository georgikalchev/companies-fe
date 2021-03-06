import { compose, createStore } from 'redux'
import rootReducer from './reducers'

function saveToLocalStorage (state) {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage () {
  try {
    const serializedState = sessionStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store