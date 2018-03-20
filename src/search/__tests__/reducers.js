import * as types from '../types'
import {
  searchControl,
  searchStories,
  searchUsers,
  searchChannels,
} from '../reducers'

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
      items: [],
      q: '',
      status: 'success',
      totalCount: null,
    })
  })

  it('handles SEARCH_USERS_REQUEST', () => {
    const action = {
      type: types.SEARCH_USERS_REQUEST,
      q: 'foo',
    }

    expect(searchUsers(undefined, action)).toEqual({
      error: '',
      items: [],
      q: 'foo',
      status: 'fetching',
      totalCount: null,
    })
  })

  it('handles SEARCH_USERS_SUCCESS', () => {
    const action = {
      type: types.SEARCH_USERS_SUCCESS,
      after: 2,
      before: 1,
      count: 2,
      result: [1],
      totalCount: 4,
    }

    const state = {
      error: '',
      q: 'foo',
      status: 'fetching',
    }

    expect(searchUsers(state, action)).toEqual({
      after: 2,
      before: 1,
      count: 2,
      error: '',
      items: [1],
      q: 'foo',
      status: 'success',
      totalCount: 4,
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
      items: [],
      q: '',
      status: 'success',
      totalCount: null,
    })
  })

  it('handles SEARCH_STORIES_REQUEST', () => {
    const action = {
      type: types.SEARCH_STORIES_REQUEST,
      q: 'foo',
    }

    const state = {
      error: 'foo',
      items: [],
      q: '',
      status: 'success',
      totalCount: null,
    }

    expect(searchStories(state, action)).toEqual({
      error: '',
      items: [],
      q: 'foo',
      status: 'fetching',
      totalCount: null,
    })
  })

  it('handles SEARCH_STORIES_SUCCESS', () => {
    const action = {
      type: types.SEARCH_STORIES_SUCCESS,
      after: 1,
      before: 2,
      count: 2,
      result: [1, 2, 3],
      totalCount: 4,
    }

    const state = {
      error: '',
      items: [],
      q: 'foo',
      status: 'fetching',
      totalCount: null,
    }

    expect(searchStories(state, action)).toEqual({
      after: 1,
      before: 2,
      count: 2,
      error: '',
      items: [1, 2, 3],
      q: 'foo',
      status: 'success',
      totalCount: 4,
    })
  })

  it('handles SEARCH_STORIES_FAILURE', () => {
    const action = {
      type: types.SEARCH_STORIES_FAILURE,
      message: 'bar',
    }

    const state = {
      error: '',
      items: [],
      q: 'foo',
      status: 'fetching',
      totalCount: null,
    }

    expect(searchStories(state, action)).toEqual({
      error: 'bar',
      items: [],
      q: 'foo',
      status: 'failure',
      totalCount: null,
    })
  })

  it('handles SEARCH_CLEAR', () => {
    const action = {
      type: types.SEARCH_CLEAR,
    }

    const state = {
      error: '',
      items: [],
      q: 'foo',
      status: 'fetching',
      foo: 'bar',
      totalCount: null,
    }

    expect(searchStories(state, action)).toEqual({
      error: '',
      items: [],
      q: '',
      status: 'success',
      foo: 'bar',
      totalCount: null,
    })
  })
})

describe('Search channels', () => {
  it('exists', () => {
    expect(searchChannels).toBeDefined()
  })

  it('returns inital state', () => {
    expect(searchChannels(undefined, {})).toEqual({
      error: '',
      items: [],
      q: '',
      status: 'success',
      totalCount: null,
    })
  })

  it('handles SEARCH_CHANNELS_REQUEST', () => {
    const action = {
      type: types.SEARCH_CHANNELS_REQUEST,
      q: 'foo',
    }

    expect(searchChannels(undefined, action)).toEqual({
      error: '',
      items: [],
      q: 'foo',
      status: 'fetching',
      totalCount: null,
    })
  })

  it('handles SEARCH_CHANNELS_SUCCESS', () => {
    const action = {
      type: types.SEARCH_CHANNELS_SUCCESS,
      after: 1,
      before: 2,
      count: 2,
      result: [1, 2, 3],
      totalCount: 4,
    }

    const state = {
      error: '',
      items: [],
      q: 'foo',
      status: 'fetching',
      totalCount: null,
    }

    expect(searchChannels(state, action)).toEqual({
      after: 1,
      before: 2,
      count: 2,
      error: '',
      items: [1, 2, 3],
      q: 'foo',
      status: 'success',
      totalCount: 4,
    })
  })

  it('handles SEARCH_CHANNELS_FAILURE', () => {
    const action = {
      type: types.SEARCH_CHANNELS_FAILURE,
      message: 'Network Error',
    }

    const state = {
      error: '',
      q: 'foo',
      status: 'fetching',
    }

    expect(searchChannels(state, action)).toEqual({
      error: 'Network Error',
      q: 'foo',
      status: 'failure',
    })
  })

  it('handles SEARCH_CLEAR', () => {
    const action = {
      type: types.SEARCH_CLEAR,
    }

    const state = {
      error: 'Network Error',
      foo: 'bar',
      q: 'foo',
      status: 'failure',
    }

    expect(searchChannels(state, action)).toEqual({
      error: '',
      foo: 'bar',
      q: '',
      status: 'success',
    })
  })
})
