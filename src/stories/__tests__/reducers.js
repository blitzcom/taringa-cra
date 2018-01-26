import {
  storiesEntities,
  storiesFetchControl,
} from '../reducers'

import * as types from '../types'

describe('Stories entities reducer', () => {
  it('returns initial state', () => {
    expect(storiesEntities(undefined, {})).toEqual({})
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
    expect(storiesFetchControl(undefined, {})).toEqual({})
  })

  it('creates state for new story entities', () => {
    const action = {
      type: 'any',
      entities: {
        summaries: {
          1: { bar: false, foo: true, id: 1 },
          2: { bar: false, foo: true, id: 2 },
        }
      }
    }

    expect(storiesFetchControl(undefined, action)).toEqual({
      1: { error: '', status: 'success' },
      2: { error: '', status: 'success' },
    })
  })

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1,
    }

    const state = {
      1: { error: '', status: 'success' },
      2: { error: '', status: 'success' },
    }

    expect(storiesFetchControl(state, action)).toEqual({
      1: { error: '', status: 'fetching' },
      2: { error: '', status: 'success' },
    })
  })

  it('handles FETCH_REQUEST from FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1,
    }

    const state = {
      1: { error: 'foobar', status: 'failure' },
      2: { error: '', status: 'success' },
    }

    expect(storiesFetchControl(state, action)).toEqual({
      1: { error: '', status: 'fetching' },
      2: { error: '', status: 'success' },
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      id: 1,
    }

    const state = {
      1: { error: '', status: 'fetching' },
      2: { error: '', status: 'success' },
    }

    expect(storiesFetchControl(state, action)).toEqual({
      1: { error: '', status: 'success' },
      2: { error: '', status: 'success' },
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'foobar',
    }

    const state = {
      1: { error: '', status: 'fetching' },
      2: { error: '', status: 'success' },
    }

    expect(storiesFetchControl(state, action)).toEqual({
      1: { error: 'foobar', status: 'failure' },
      2: { error: '', status: 'success' },
    })
  })
})
