import _ from 'lodash'

import * as types from '../types'
import { searching } from '../reducers'

describe('Searching reducer', () => {
  it('exists', () => {
    expect(searching).toBeDefined()
  })

  it('returns initial state', () => {
    expect(searching(_.noop(), {})).toEqual({})
  })

  it('handles SEARCH_REQUEST', () => {
    const action = {
      type: types.SEARCH_REQUEST,
      id: 'foo',
      q: 'bar',
    }

    const state = {
      foo: {
        error: 'baz',
        items: [],
        q: 'bar',
        status: 'failure',
      },
    }

    expect(searching(state, action)).toEqual({
      foo: {
        error: '',
        items: [],
        q: 'bar',
        status: 'fetching',
      },
    })
  })

  it('handles SEARCH_SUCCESS', () => {
    const action = {
      type: types.SEARCH_SUCCESS,
      after: 1,
      before: 2,
      count: 3,
      id: 'foo',
      result: [4, 5, 6],
      totalCount: 7,
    }

    const state = {
      foo: {
        error: '',
        items: [],
        q: 'bar',
        status: 'fetching',
      },
    }

    expect(searching(state, action)).toEqual({
      foo: {
        after: 1,
        before: 2,
        count: 3,
        error: '',
        items: [4, 5, 6],
        q: 'bar',
        status: 'success',
        totalCount: 7,
      },
    })
  })

  it('handles SEARCH_FAILURE', () => {
    const action = {
      type: types.SEARCH_FAILURE,
      id: 'foo',
      message: 'baz',
    }

    const state = {
      foo: {
        error: '',
        items: [],
        q: 'bar',
        status: 'fetching',
      },
    }

    expect(searching(state, action)).toEqual({
      foo: {
        error: 'baz',
        items: [],
        q: 'bar',
        status: 'failure',
      },
    })
  })
})
