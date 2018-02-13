import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Summaries } from '../Summaries'
import { image } from '../data'
import { normalizeStory } from '../../utils'

describe('Summaries', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1513924592705)
  })

  it('renders default', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Summaries />
      </MemoryRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders loader', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Summaries status="fetching" />
      </MemoryRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders error', () => {
    const tree = renderer.create(
      <Summaries status="failure" error="Network Error" />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders summaries', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Summaries status="success" summaries={[normalizeStory(image)]} />
        </MemoryRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('fetches summaries on mount', () => {
    const mockFetch = jest.fn()

    mount(
      <MemoryRouter>
        <Summaries loadFeed={mockFetch} />
      </MemoryRouter>
    )

    expect(mockFetch).toBeCalled()
  })
})
