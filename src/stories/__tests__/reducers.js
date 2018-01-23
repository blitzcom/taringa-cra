import {
  storiesEntities,
  storiesFetchControl,
} from '../reducers'

import * as types from '../types'

describe('Stories entities reducer', () => {
  it('returns initial state', () => {
    expect(storiesEntities(undefined,{})).toEqual({})
  })

  it('merges stories', () => {
    const action = {
      type: 'any',
      entities: {
        stories: {
          1: { bar: false, foo: true, id: 1 },
          2: { bar: false, foo: true, id: 2 },
        }
      }
    }

    expect(storiesEntities(undefined, action)).toEqual({
      1: { bar: false, foo: true, id: 1 },
      2: { bar: false, foo: true, id: 2 },
    })
  })
})

describe('Stories fetch control reducer', () => {
  it('returns initial state', () => {
    expect(storiesFetchControl(undefined, {})).toEqual({
      error: '',
      ids: [],
      status: 'success',
    })
  })

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST,
    }

    const state = {
      error: 'Network Error',
      ids: [],
      status: 'failure',
    }

    expect(storiesFetchControl(state, action)).toEqual({
      error: '',
      ids: [],
      status: 'fetching',
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      result: [1, 2, 3, 4, 5]
    }

    const state = {
      error: '',
      ids: [],
      status: 'fetching',
    }

    expect(storiesFetchControl(state, action)).toEqual({
      error: '',
      ids: [1, 2, 3, 4, 5],
      status: 'success',
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      message: 'Network Error'
    }

    const state = {
      error: '',
      ids: [],
      status: 'fetching',
    }

    expect(storiesFetchControl(state, action)).toEqual({
      error: 'Network Error',
      ids: [],
      status: 'failure',
    })
  })
})
