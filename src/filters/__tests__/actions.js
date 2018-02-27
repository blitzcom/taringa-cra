import * as actions from '../actions'
import * as types from '../types'

describe('Filter actions', () => {
  it('creates an action to set filters', () => {
    expect(actions.set('foo')).toEqual({
      type: types.SET,
      filters: 'foo',
    })
  })

  it('creates an action to clear filters', () => {
    expect(actions.clear()).toEqual({
      type: types.CLEAR,
    })
  })
})
