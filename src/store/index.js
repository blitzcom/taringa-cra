import * as redux from 'redux'
import thunk from 'redux-thunk'
import reduxImmutable from 'redux-immutable-state-invariant'
import axios from 'axios'
import createSagaMiddleware from 'redux-saga'

import StorageMiddleware from './middlewares/storage'
import reducer from './reducer'
import rootSaga from './sagas'

axios.defaults.baseURL = '/api'

const sagaMiddleware = createSagaMiddleware()
const buildThunk = () => thunk.withExtraArgument(axios)

const buildDevTools = () =>
  window.devToolsExtension ? window.devToolsExtension() : f => f

const globalState = {}

let compose = null

const configure = (initialState = globalState) => {
  if (process.env.NODE_ENV === 'development') {
    compose = redux.compose(
      redux.applyMiddleware(
        sagaMiddleware,
        buildThunk(),
        StorageMiddleware,
        reduxImmutable()
      ),
      buildDevTools()
    )
  } else {
    compose = redux.compose(
      redux.applyMiddleware(sagaMiddleware, buildThunk(), StorageMiddleware)
    )
  }

  const store = redux.createStore(reducer, initialState, compose)

  sagaMiddleware.run(rootSaga)

  return store
}

export default configure
