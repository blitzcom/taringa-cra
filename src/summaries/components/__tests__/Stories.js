import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import { Summaries } from '../Summaries'
import { StoryShout } from '../data'

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

  it('renders stories', () => {
    const tree = renderer
      .create(<Summaries stories={[StoryShout]} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('fetches stories on mount', () => {
    const mock = jest.fn()

    mount(<Summaries fetchStories={mock}/>)

    expect(mock).toBeCalled()
  })
})
