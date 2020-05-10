import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import { DELETE_PROJECT, SAVE_PROJECT } from './projects/actions'

const fs = require('fs')

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

function download (filename, text) {
  var pom = document.createElement('a')
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  pom.setAttribute('download', filename)

  if (document.createEvent) {
    var event = document.createEvent('MouseEvents')
    event.initEvent('click', true, true)
    pom.dispatchEvent(event)
  } else {
    pom.click()
  }
}

const mockApiHandler = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.log(result)
  if ([SAVE_PROJECT, DELETE_PROJECT].indexOf(action.type) > -1) {
    const { projects } = store.getState().projects

    let data = JSON.stringify(projects)
    download('xxx.json', data)
  }
  return result
}
const persistedState = loadFromLocalStorage()
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(mockApiHandler),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store