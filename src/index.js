import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import $ from 'jquery'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import './fontawesome-all.css'
import './index.css'
import './css/placeholder.css'
import './css/taringa.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configure from './store'
import { restoreItemSize } from './settings/actions'
import { add as addFlash } from './flash/actions'

window.$ = $

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
    addFlash(
      'Hay una nueva versión de Taringa disponible, por favor recarga la página.'
    )
  )
}

registerServiceWorker(onNewUpdate)
