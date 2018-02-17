import * as actions from '../actions'
import * as types from '../types'

describe('Search actions', () => {
  it('creates an action to trigger a search', () => {
    expect(actions.searchTrigger('foo')).toEqual({
      type: types.SEARCH_TRIGGER,
      q: 'foo',
    })
  })

  it('creates an action to start a search', () => {
    expect(actions.searchStart('foo')).toEqual({
      type: types.SEARCH_START,
      q: 'foo',
    })
  })

  it('creates an action to finish a search', () => {
    expect(actions.searchFinish()).toEqual({
      type: types.SEARCH_FINISH,
    })
  })

  it('creates an action to start an users search request', () => {
    expect(actions.searchUsersRequest('foo')).toEqual({
      type: types.SEARCH_USERS_REQUEST,
      q: 'foo',
    })
  })

  it('creates an action to finish users search with success', () => {
    expect(actions.searchUsersSuccess('payload')).toEqual({
      type: types.SEARCH_USERS_SUCCESS,
      payload: 'payload',
    })
  })

  it('creates an action to finish users search with failure', () => {
    expect(actions.searchUsersFailure('foo')).toEqual({
      type: types.SEARCH_USERS_FAILURE,
      message: 'foo',
    })
  })

  it('creates an action to start a stories search request', () => {
    expect(actions.searchStoriesRequest('foo')).toEqual({
      type: types.SEARCH_STORIES_REQUEST,
      q: 'foo',
    })
  })

  it('creates an action to finish stories search with success', () => {
    expect(actions.searchStoriesSuccess('payload')).toEqual({
      type: types.SEARCH_STORIES_SUCCESS,
      payload: 'payload',
    })
  })

  it('creates an action to finish stories search with failure', () => {
    expect(actions.searchStoriesFailure('foo')).toEqual({
      type: types.SEARCH_STORIES_FAILURE,
      message: 'foo',
    })
  })

  it('creates an action to clear search', () => {
    expect(actions.searchClear()).toEqual({
      type: types.SEARCH_CLEAR,
    })
  })
})
