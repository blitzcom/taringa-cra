import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Story } from '../Story'

describe('Story', () => {
  it('exists', () => {
    expect(Story).toBeDefined()
  })
})
