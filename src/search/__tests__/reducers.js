import * as types from '../types'
import { searchControl, searchStories, searchUsers } from '../reducers'

describe('Search control reducer', () => {
  it('exists', () => {
    expect(searchControl).toBeDefined()
  })

  it('returns initial state', () => {
    expect(searchControl(undefined, {})).toEqual({
      q: '',
      status: 'success',
    })
  })

  it('handles SEARCH_START', () => {
    const action = {
      type: types.SEARCH_START,
      q: 'foo',
    }

    expect(searchControl(undefined, action)).toEqual({
      q: 'foo',
      status: 'fetching',
    })
  })

  it('handles SEARCH_FINISH', () => {
    const action = {
      type: types.SEARCH_FINISH,
    }

    const state = {
      q: 'foo',
      status: 'fetching',
    }

    expect(searchControl(state, action)).toEqual({
      q: 'foo',
      status: 'success',
    })
  })

  it('handles SEARCH_CLEAR', () => {
    const action = {
      type: types.SEARCH_CLEAR,
    }

    const state = {
      q: 'foo',
      status: 'fetching',
    }

    expect(searchControl(state, action)).toEqual({
      q: '',
      status: 'success',
    })
  })
})

describe('Search Users', () => {
  it('exists', () => {
    expect(searchUsers).toBeDefined()
  })

  it('returns initial state', () => {
    expect(searchUsers(undefined, {})).toEqual({
      error: '',
      q: '',
      status: 'success',
    })
  })

  it('handles SEARCH_USERS_REQUEST', () => {
    const action = {
      type: types.SEARCH_USERS_REQUEST,
      q: 'foo',
    }

    const state = {
      error: 'foo',
      q: '',
      status: 'success',
    }

    expect(searchUsers(state, action)).toEqual({
      error: '',
      q: 'foo',
      status: 'fetching',
    })
  })

  it('handles SEARCH_USERS_SUCCESS', () => {
    const action = {
      type: types.SEARCH_USERS_SUCCESS,
      payload: { foo: 'bar' },
    }

    const state = {
      error: '',
      q: 'foo',
      status: 'fetching',
    }

    expect(searchUsers(state, action)).toEqual({
      error: '',
      q: 'foo',
      status: 'success',
      foo: 'bar',
    })
  })

  it('handles SEARCH_USERS_FAILURE', () => {
    const action = {
      type: types.SEARCH_USERS_FAILURE,
      message: 'bar',
    }

    const state = {
      error: '',
      q: 'foo',
      status: 'fetching',
    }

    expect(searchUsers(state, action)).toEqual({
      error: 'bar',
      q: 'foo',
      status: 'failure',
    })
  })

  it('handles SEARCH_CLEAR', () => {
    const action = {
      type: types.SEARCH_CLEAR,
    }

    const state = {
      error: '',
      q: 'foo',
      status: 'fetching',
      foo: 'bar',
    }

    expect(searchUsers(state, action)).toEqual({
      error: '',
      q: '',
      status: 'success',
      foo: 'bar',
    })
  })
})

describe('Search Stories', () => {
  it('exists', () => {
    expect(searchStories).toBeDefined()
  })

  it('returns initial state', () => {
    expect(searchStories(undefined, {})).toEqual({
      error: '',
      q: '',
      status: 'success',
    })
  })

  it('handles SEARCH_STORIES_REQUEST', () => {
    const action = {
      type: types.SEARCH_STORIES_REQUEST,
      q: 'foo',
    }

    const state = {
      error: 'foo',
      q: '',
      status: 'success',
    }

    expect(searchStories(state, action)).toEqual({
      error: '',
      q: 'foo',
      status: 'fetching',
    })
  })

  it('handles SEARCH_STORIES_SUCCESS', () => {
    const action = {
      type: types.SEARCH_STORIES_SUCCESS,
      payload: { foo: 'bar' },
    }

    const state = {
      error: '',
      q: 'foo',
      status: 'fetching',
    }

    expect(searchStories(state, action)).toEqual({
      error: '',
      q: 'foo',
      status: 'success',
      foo: 'bar',
    })
  })

  it('handles SEARCH_STORIES_FAILURE', () => {
    const action = {
      type: types.SEARCH_STORIES_FAILURE,
      message: 'bar',
    }

    const state = {
      error: '',
      q: 'foo',
      status: 'fetching',
    }

    expect(searchStories(state, action)).toEqual({
      error: 'bar',
      q: 'foo',
      status: 'failure',
    })
  })

  it('handles SEARCH_CLEAR', () => {
    const action = {
      type: types.SEARCH_CLEAR,
    }

    const state = {
      error: '',
      q: 'foo',
      status: 'fetching',
      foo: 'bar',
    }

    expect(searchStories(state, action)).toEqual({
      error: '',
      q: '',
      status: 'success',
      foo: 'bar',
    })
  })
})
