import * as redux from 'redux'
import thunk from 'redux-thunk'
import reduxImmutable from 'redux-immutable-state-invariant'
import axios from 'axios'

import reducer from './reducer'

axios.defaults.baseURL = 'https://beta.taringa.net/api'

const buildThunk = () => thunk.withExtraArgument(axios)

const buildDevTools = () => window.devToolsExtension ?
  window.devToolsExtension() :
  f => f

const globalState = {}

let compose = null

export const configure = (initialState = globalState) => {
  if (process.env.NODE_ENV === 'development') {
    compose = redux.compose(
      redux.applyMiddleware(buildThunk(), reduxImmutable()),
      buildDevTools()
    )
  } else {
    compose = redux.compose(
      redux.applyMiddleware(buildThunk())
    )
  }

  return redux.createStore(reducer, initialState, compose)
}

export default configure
