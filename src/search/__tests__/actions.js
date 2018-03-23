import * as actions from '../actions'
import * as types from '../types'

describe('Search actions', () => {
  it('creates an action to trigger a search', () => {
    expect(actions.searchTrigger('foo', 'bar')).toEqual({
      type: types.SEARCH_TRIGGER,
      id: 'foo',
      q: 'bar',
    })
  })

  it('creates an action to start a search request', () => {
    expect(actions.searchRequest('foo', 'bar')).toEqual({
      type: types.SEARCH_REQUEST,
      id: 'foo',
      q: 'bar',
    })
  })

  it('craetes an action to finish a search with success', () => {
    expect(
      actions.searchSuccess('foo', { items: [], after: 1, before: 2 })
    ).toEqual({
      type: types.SEARCH_SUCCESS,
      after: 1,
      before: 2,
      entities: {},
      id: 'foo',
      result: [],
    })
  })

  it('creates an action to finish a search with failure', () => {
    expect(actions.searchFailure('foo', 'baz')).toEqual({
      type: types.SEARCH_FAILURE,
      id: 'foo',
      message: 'baz',
    })
  })

  it('creates an action to cancels a search', () => {
    expect(actions.searchCancel()).toEqual({
      type: types.SEARCH_CANCEL,
    })
  })

  it('creates an action to clear search', () => {
    expect(actions.searchClear('foo')).toEqual({
      type: types.SEARCH_CLEAR,
      id: 'foo',
    })
  })
})
