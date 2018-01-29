import {
  commentsEntities,
  commentsFetchControl,
} from '../reducers'

import * as types from '../types'

describe('Comments entities reducers', () => {
  it('exists', () => {
    expect(commentsEntities).toBeDefined()
  })

  it('returns initial state', () => {
    expect(commentsEntities(undefined, {})).toEqual({})
  })

  it('merges comments', () => {
    const action = {
      type: 'any',
      entities: {
        comments: {
          1: { foo: 'bar', id: 1 }
        }
      }
    }

    expect(commentsEntities(undefined, action)).toEqual({
      1: { foo: 'bar', id: 1 }
    })
  })

  it('merges replies', () => {
    const action = {
      type: 'any',
      entities: {
        replies: {
          2: { foo: 'baz', id: 2 }
        }
      }
    }

    expect(commentsEntities(undefined, action)).toEqual({
      2: { foo: 'baz', id: 2 }
    })
  })

  it('merges replies and comments', () => {
    const action = {
      type: 'any',
      entities: {
        comments: {
          1: { foo: 'bar', id: 1 },
        },
        replies: {
          2: { foo: 'baz', id: 2 }
        }
      }
    }

    expect(commentsEntities(undefined, action)).toEqual({
      1: { foo: 'bar', id: 1 },
      2: { foo: 'baz', id: 2 }
    })
  })

  it('skips if not comments and replies', () => {
    const action = {
      type: 'any',
      entities: {}
    }

    const state = {
      1: { foo: 'bar', id: 1 }
    }

    expect(commentsEntities(state, action)).toEqual({
      1: { foo: 'bar', id: 1 }
    })
  })
})

describe('Comments fetch control reducer', () => {
  it('exists', () => {
    expect(commentsFetchControl).toBeDefined()
  })

  it('returns initial state', () => {
    expect(commentsFetchControl(undefined, {})).toEqual({})
  })

  it('handles CREATE_FETCH_CONTROL', () => {
    const action = {
      type: types.CREATE_FETCH_CONTROL,
      id: 1
    }

    expect(commentsFetchControl(undefined, action)).toEqual({
      1: { error: '', ids: [], status: 'success' }
    })
  })

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1
    }

    const state = {
      1: { error: '', ids: [], status: 'success' },
      2: { error: '', ids: [], status: 'success' }
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', ids: [], status: 'fetching' },
      2: { error: '', ids: [], status: 'success' }
    })
  })

  it('handles FETCH_REQUEST after FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1
    }

    const state = {
      1: { error: 'Network Error', ids: [], status: 'failure' },
      2: { error: '', ids: [], status: 'success' }
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', ids: [], status: 'fetching' },
      2: { error: '', ids: [], status: 'success' }
    })
  })

  it('handles FETCH_REQUEST after FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1
    }

    const state = {
      1: { error: '', ids: [1, 2, 3, 4, 5], status: 'success' },
      2: { error: '', ids: [], status: 'success' }
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', ids: [1, 2, 3, 4, 5], status: 'fetching' },
      2: { error: '', ids: [], status: 'success' }
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      id: 1,
      result: [1, 2, 3, 4, 5],
    }

    const state = {
      1: { error: '', ids: [], status: 'fetching' },
      2: { error: '', ids: [], status: 'success' }
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', ids: [1, 2, 3, 4, 5], status: 'success' },
      2: { error: '', ids: [], status: 'success' }
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'Network Error'
    }

    const state = {
      1: { error: '', ids: [], status: 'fetching' },
      2: { error: '', ids: [], status: 'success' }
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: 'Network Error', ids: [], status: 'failure' },
      2: { error: '', ids: [], status: 'success' }
    })
  })
})
