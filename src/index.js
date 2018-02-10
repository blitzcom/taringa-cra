import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import './fontawesome-all.css'
import './index.css'
import './css/action.css'
import './css/placeholder.css'
import './css/taringa.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configure from './store'
import { restoreItemSize } from './settings/actions'
import { add as addFlash } from './flash/actions'

const store = configure()
restoreItemSize(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

const onNewUpdate = () => {
  store.dispatch(
    addFlash('Hay una nueva versión de Taringa disponible, por favor recarga la página.')
  )
}

registerServiceWorker(onNewUpdate)
