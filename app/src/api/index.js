import { displayError, minorError } from '../store/ui/actions'

export function getCompanies () {
  return fetch('http://localhost:8080/companies').then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(JSON.stringify({ type: 1, message: 'for the companies' }))
      }
    }
  ).catch(error => {
    throw new Error(error.message)
  })
}

export async function getCompaniesAddresses () {
  return fetch('http://localhost:8080/addresses').then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(JSON.stringify({ type: 3, message: 'for the addresses of the companies' }))
      }
    }
  ).catch(error => {
    throw new Error(error.message)
  })
}

export function getProjects () {
  return fetch('http://localhost:8080/projects').then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(JSON.stringify({ type: 1, message: 'for the projects' }))
    }
  }).catch(error => {
    throw new Error(error.message)
  })
}

export function getEmployees () {
  return fetch('http://localhost:8080/employees').then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(JSON.stringify({ type: 1, message: 'for the employees' }))
    }
  }).catch(error => {
    throw new Error(error.message)
  })
}

export function callSaveProject (project) {
  return fetch(
    'http://localhost:8080/save-project',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(JSON.stringify({ type: 0, message: 'Could not save the project' }))
    }
  }).catch(error => {
    throw new Error(error.message)
  })
}

export function callDeleteProject (project) {
  return fetch(
    'http://localhost:8080/delete-project',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: project
    }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(JSON.stringify({ type: 0, message: 'Could not remove the project' }))
    }
  }).catch(error => {
    throw new Error(error.message)
  })
}

export function errorHandler (error, dispatch) {
  try {
    const { type, message } = JSON.parse(error.message)

    if (!type) {
      dispatch(displayError(''))
    }
    if (type === 1 || type === 2) {
      dispatch(displayError(message))
    }
    if (type === 0) {
      dispatch(minorError(message))
    }
  } catch (e) {
    dispatch(displayError('¯\\_(ツ)_/¯'))
  }

}