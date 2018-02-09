import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { configure, addDecorator } from '@storybook/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../src/index.css'
import '../src/fontawesome-all.css'
import '../src/css/action.css'
import '../src/css/placeholder.css'
import '../src/css/taringa.css'

addDecorator(story => (
  <MemoryRouter>
    {story()}
  </MemoryRouter>
))

const req = require.context('../src', true, /stories\.book\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
