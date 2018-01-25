import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import { Stories } from '../Stories'
import { StoryShout } from '../data'

describe('Stories', () => {
  it('renders default', () => {
    const tree = renderer.create(<Stories/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders loader', () => {
    const tree = renderer.create(<Stories status="fetching"/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders error', () => {
    const tree = renderer
      .create(<Stories status="failure" error="Network Error" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders stories', () => {
    const tree = renderer
      .create(<Stories stories={[StoryShout]} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('fetches stories on mount', () => {
    const mock = jest.fn()

    mount(<Stories fetchStories={mock}/>)

    expect(mock).toBeCalled()
  })
})
