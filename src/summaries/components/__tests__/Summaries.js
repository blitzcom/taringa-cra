import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Summaries } from '../Summaries'
import { SummaryShout } from '../data'

describe('Summaries', () => {
  it('renders default', () => {
    const tree = renderer.create(<Summaries/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders loader', () => {
    const tree = renderer.create(<Summaries status="fetching"/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders error', () => {
    const tree = renderer
      .create(<Summaries status="failure" error="Network Error" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders summaries', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Summaries summaries={[SummaryShout]} />
        </MemoryRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('fetches summaries on mount', async () => {
    const promise = Promise.resolve()
    const mock = jest.fn(() => promise)
    const mockFetch = jest.fn()

    mount(<Summaries invalidate={mock} loadMore={mockFetch} />)

    await promise

    expect(mock).toBeCalled()
    expect(mockFetch).toBeCalled()
  })
})
