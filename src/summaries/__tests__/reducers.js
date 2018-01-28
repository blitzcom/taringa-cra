import {
  summariesEntities,
  summariesFetchControl,
} from '../reducers'

import * as types from '../types'

describe('Summaries entities reducer', () => {
  it('returns initial state', () => {
    expect(summariesEntities(undefined,{})).toEqual({})
  })

  it('merges summaries', () => {
    const action = {
      type: 'any',
      entities: {
        summaries: {
          1: { bar: false, foo: true, id: 1 },
          2: { bar: false, foo: true, id: 2 },
        }
      }
    }

    expect(summariesEntities(undefined, action)).toEqual({
      1: { bar: false, foo: true, id: 1 },
      2: { bar: false, foo: true, id: 2 },
    })
  })

  it('handles INVALIDATE', () => {
    const action = {
      type: types.INVALIDATE
    }

    const state = {
      1: { bar: false, foo: true, id: 1 },
      2: { bar: false, foo: true, id: 2 },
    }

    expect(summariesEntities(state, action)).toEqual({})
  })
})

describe('Summaries fetch control reducer', () => {
  it('returns initial state', () => {
    expect(summariesFetchControl(undefined, {})).toEqual({
      after: null,
      before: null,
      error: '',
      ids: [],
      status: 'success',
      totalCount: 0,
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

    expect(summariesFetchControl(state, action)).toEqual({
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

    expect(summariesFetchControl(state, action)).toEqual({
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

    expect(summariesFetchControl(state, action)).toEqual({
      error: 'Network Error',
      ids: [],
      status: 'failure',
    })
  })

  it('handles INVALIDATE', () => {
    const action = {
      type: types.INVALIDATE
    }

    const state = {
      after: 30,
      before: 32,
      error: 'Network Error',
      ids: [1, 2, 3, 4, 5],
      status: 'failure',
      totalCount: 500,
    }

    expect(summariesFetchControl(state, action)).toEqual({
      after: null,
      before: null,
      error: '',
      ids: [],
      status: 'success',
      totalCount: 0,
    })
  })
})
