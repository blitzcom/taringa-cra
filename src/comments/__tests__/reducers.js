import {
  commentAttachmentEntities,
  commentsEntities,
  commentsFetchControl,
  repliesFetchControl,
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
          1: { foo: 'bar', id: 1 },
        },
      },
    }

    expect(commentsEntities(undefined, action)).toEqual({
      1: { foo: 'bar', id: 1 },
    })
  })

  it('merges replies', () => {
    const action = {
      type: 'any',
      entities: {
        replies: {
          2: { foo: 'baz', id: 2 },
        },
      },
    }

    expect(commentsEntities(undefined, action)).toEqual({
      2: { foo: 'baz', id: 2 },
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
          2: { foo: 'baz', id: 2 },
        },
      },
    }

    expect(commentsEntities(undefined, action)).toEqual({
      1: { foo: 'bar', id: 1 },
      2: { foo: 'baz', id: 2 },
    })
  })

  it('skips if not comments and replies', () => {
    const action = {
      type: 'any',
      entities: {},
    }

    const state = {
      1: { foo: 'bar', id: 1 },
    }

    expect(commentsEntities(state, action)).toEqual({
      1: { foo: 'bar', id: 1 },
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

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1,
    }

    const state = {
      1: { error: '', items: [], status: 'success' },
      2: { error: '', items: [], status: 'success' },
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', items: [], status: 'fetching' },
      2: { error: '', items: [], status: 'success' },
    })
  })

  it('handles FETCH_REQUEST after FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1,
    }

    const state = {
      1: { error: 'Network Error', items: [], status: 'failure' },
      2: { error: '', items: [], status: 'success' },
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', items: [], status: 'fetching' },
      2: { error: '', items: [], status: 'success' },
    })
  })

  it('handles FETCH_REQUEST after FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1,
    }

    const state = {
      1: { error: '', items: [1, 2, 3, 4, 5], status: 'success' },
      2: { error: '', items: [], status: 'success' },
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', items: [1, 2, 3, 4, 5], status: 'fetching' },
      2: { error: '', items: [], status: 'success' },
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      entities: {
        commentRoot: {
          1: { items: [1, 2, 3, 4] },
        },
      },
      id: 1,
      result: 1,
    }

    const state = {
      1: { error: '', items: [9, 10], status: 'fetching' },
      2: { error: '', items: [], status: 'fetching' },
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', items: [9, 10, 1, 2, 3, 4], status: 'success' },
      2: { error: '', items: [], status: 'fetching' },
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'Network Error',
    }

    const state = {
      1: { error: '', items: [], status: 'fetching' },
      2: { error: '', items: [], status: 'success' },
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: 'Network Error', items: [], status: 'failure' },
      2: { error: '', items: [], status: 'success' },
    })
  })

  it('handles CLEAR', () => {
    const action = {
      type: types.CLEAR,
      id: 1,
    }

    const state = {
      1: { error: '', items: [1, 2, 3, 4], status: 'fetching' },
      2: { error: '', items: [], status: 'success' },
    }

    expect(commentsFetchControl(state, action)).toEqual({
      1: { error: '', items: [], status: 'success', totalCount: 0 },
      2: { error: '', items: [], status: 'success' },
    })
  })
})

describe('Replies Fetch Control', () => {
  it('exists', () => {
    expect(repliesFetchControl).toBeDefined()
  })

  it('returns initial state', () => {
    expect(repliesFetchControl(undefined, {})).toEqual({})
  })

  it('handles FETCH_REPLIES_REQUEST', () => {
    const action = {
      type: types.FETCH_REPLIES_REQUEST,
      id: 'foo',
    }

    const state = {
      foo: {
        error: 'foo',
        status: 'success',
      },
    }

    expect(repliesFetchControl(state, action)).toEqual({
      foo: {
        error: '',
        status: 'fetching',
      },
    })
  })

  it('handles FETCH_REPLIES_SUCCESS', () => {
    const action = {
      type: types.FETCH_REPLIES_SUCCESS,
      entities: {
        replyRoots: {
          foo: {
            after: 'a',
            items: [5, 6, 7, 8],
          },
        },
      },
      id: 'foo',
      result: 'foo',
    }

    const state = {
      foo: {
        items: [1, 2, 3, 4],
        error: '',
        status: 'fetching',
      },
    }

    expect(repliesFetchControl(state, action)).toEqual({
      foo: {
        after: 'a',
        error: '',
        items: [1, 2, 3, 4, 5, 6, 7, 8],
        status: 'success',
      },
    })
  })

  it('handles FETCH_REPLIES_FAILURE', () => {
    const action = {
      type: types.FETCH_REPLIES_FAILURE,
      id: 'foo',
      message: 'Network Error',
    }

    const state = {
      foo: {
        error: '',
        status: 'fetching',
      },
    }

    expect(repliesFetchControl(state, action)).toEqual({
      foo: {
        error: 'Network Error',
        status: 'failure',
      },
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      entities: {
        replyRoots: {
          foo: { id: 'foo' },
          bar: { id: 'bar' },
        },
      },
    }

    const state = {}

    expect(repliesFetchControl(state, action)).toEqual({
      foo: { id: 'foo' },
      bar: { id: 'bar' },
    })
  })

  it('handles CLEAR', () => {
    const action = {
      type: types.CLEAR,
    }

    const state = {
      foo: { id: 'foo' },
      bar: { id: 'bar' },
    }

    expect(repliesFetchControl(state, action)).toEqual({})
  })
})

describe('Comment Attachment Entities', () => {
  it('exists', () => {
    expect(commentAttachmentEntities).toBeDefined()
  })

  it('returns initial state', () => {
    expect(commentAttachmentEntities(undefined, {})).toEqual({})
  })

  it('handles CLEAR', () => {
    const action = {
      type: types.CLEAR,
    }

    const state = {
      foo: { id: 'foo' },
      bar: { id: 'bar' },
    }

    expect(commentAttachmentEntities(state, action)).toEqual({})
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      entities: {
        commentAttachment: {
          foo: { id: 'foo' },
          bar: { id: 'bar' },
        },
      },
    }

    const state = {}

    expect(commentAttachmentEntities(state, action)).toEqual({
      foo: { id: 'foo' },
      bar: { id: 'bar' },
    })
  })
})
