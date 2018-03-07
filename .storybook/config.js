import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { configure, addDecorator } from '@storybook/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../src/index.css'
import '../src/fontawesome-all.css'
import '../src/css/placeholder.css'
import '../src/css/taringa.css'

addDecorator(story => (
  <MemoryRouter>
    <div className="container">
      <div className="row">{story()}</div>
    </div>
  </MemoryRouter>
))

const req = require.context('../src', true, /stories\.book\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
