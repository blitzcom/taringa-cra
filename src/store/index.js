import * as redux from 'redux'
import thunk from 'redux-thunk'
import reduxImmutable from 'redux-immutable-state-invariant'
import axios from 'axios'
import StorageMiddleware from './middlewares/storage'

import reducer from './reducer'

axios.defaults.baseURL = '/api'

const buildThunk = () => thunk.withExtraArgument(axios)

const buildDevTools = () =>
  window.devToolsExtension ? window.devToolsExtension() : f => f

const globalState = {}

let compose = null

export const configure = (initialState = globalState) => {
  if (process.env.NODE_ENV === 'development') {
    compose = redux.compose(
      redux.applyMiddleware(buildThunk(), StorageMiddleware, reduxImmutable()),
      buildDevTools()
    )
  } else {
    compose = redux.compose(
      redux.applyMiddleware(buildThunk(), StorageMiddleware)
    )
  }

  return redux.createStore(reducer, initialState, compose)
}

export default configure
