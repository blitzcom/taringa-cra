import { summariesEntities, summariesFetchControl } from '../reducers'

import * as types from '../types'

describe('Summaries entities reducer', () => {
  it('returns initial state', () => {
    expect(summariesEntities(undefined, {})).toEqual({})
  })

  it('merges summaries', () => {
    const action = {
      type: 'any',
      entities: {
        summaries: {
          1: { bar: false, foo: true, id: 1 },
          2: { bar: false, foo: true, id: 2 },
        },
      },
    }

    expect(summariesEntities(undefined, action)).toEqual({
      1: { bar: false, foo: true, id: 1 },
      2: { bar: false, foo: true, id: 2 },
    })
  })
})

describe('Summaries fetch control reducer', () => {
  it('returns initial state', () => {
    expect(summariesFetchControl(undefined, {})).toEqual({})
  })

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1,
    }

    const state = {}

    expect(summariesFetchControl(state, action)).toEqual({
      1: {
        after: null,
        before: null,
        count: 0,
        error: '',
        items: [],
        status: 'fetching',
        totalCount: 0,
      },
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      result: [1, 2, 3, 4, 5],
      id: 1,
    }

    const state = {
      1: {
        after: null,
        before: null,
        error: '',
        items: [],
        status: 'fetching',
        totalCount: 0,
      },
    }

    expect(summariesFetchControl(state, action)).toEqual({
      1: {
        error: '',
        items: [1, 2, 3, 4, 5],
        status: 'success',
      },
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      message: 'Network Error',
      id: 1,
    }

    const state = {
      1: {
        after: null,
        before: null,
        error: '',
        items: [],
        status: 'fetching',
        totalCount: 0,
      },
    }

    expect(summariesFetchControl(state, action)).toEqual({
      1: {
        after: null,
        before: null,
        error: 'Network Error',
        items: [],
        status: 'failure',
        totalCount: 0,
      },
    })
  })
})
