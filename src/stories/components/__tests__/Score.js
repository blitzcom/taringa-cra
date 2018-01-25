import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Score from '../Score'

describe('Score', () => {
  it('renders default', () => {
    const tree = renderer
      .create(<Score downvotes={2500} upvotes={3500} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('voted up', () => {
    const tree = renderer
      .create(<Score downvotes={2500} upvotes={3500} voted={1} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('voted down', () => {
    const tree = renderer
      .create(<Score downvotes={2500} upvotes={3500} voted={-1} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('voting', () => {
    const tree = renderer
      .create(<Score downvotes={2500} upvotes={3500} isVoting />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('handles onVoteUp', () => {
    const mock = jest.fn()
    const score = shallow(<Score onVoteUp={mock}/>)

    score.find('button').first().simulate('click')

    expect(mock).toBeCalled()
  })

  it('handles onVoteDown', () => {
    const mock = jest.fn()
    const score = shallow(<Score onVoteDown={mock}/>)

    score.find('button').last().simulate('click')

    expect(mock).toBeCalled()
  })

  it('cannot vote if is voting', () => {
    const up = jest.fn()
    const down = jest.fn()
    const score = shallow(<Score isVoting onVoteDown={down} onVoteUp={up}/>)

    score.find('button').last().simulate('click')
    score.find('button').first().simulate('click')

    expect(up).not.toBeCalled()
    expect(down).not.toBeCalled()
  })
})
