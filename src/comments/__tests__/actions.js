import * as types from '../types'
import * as actions from '../actions'
import { REPLACE, PUSH } from '../../constants'

describe('Comments actions', () => {
  it('creates an action to start fetching comments', () => {
    expect(actions.fetchRequest(1)).toEqual({
      type: types.FETCH_REQUEST,
      id: 1,
    })
  })

  it('creates an action to stop fetching comments with success', () => {
    expect(actions.fetchSuccess(1)).toEqual({
      type: types.FETCH_SUCCESS,
      id: 1,
    })
  })

  it('creates an action to stop fetching comments with failure', () => {
    expect(actions.fetchFailure(1, 'Network Error')).toEqual({
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'Network Error',
    })
  })

  it('creates an action to trigger load comments', () => {
    expect(actions.load(1)).toEqual({
      type: types.FETCH_TRIGGER,
      id: 1,
    })
  })

  it('creates an action to clear a comments list', () => {
    expect(actions.clear(1)).toEqual({
      type: types.CLEAR,
      id: 1,
    })
  })
})

describe('Replies actions', () => {
  it('creates an action to trigger fetching replies', () => {
    expect(actions.fetchRepliesTrigger('foo')).toEqual({
      type: types.FETCH_REPLIES_TRIGGER,
      id: 'foo',
    })
  })

  it('creates an action to start fetching replies', () => {
    expect(actions.fetchRepliesRequest('foo')).toEqual({
      type: types.FETCH_REPLIES_REQUEST,
      id: 'foo',
    })
  })

  it('creates an action to stop fetching replies with success', () => {
    const result = {
      after: 'a',
      before: 'b',
      id: 'foo',
      replies: [],
    }

    expect(actions.fetchRepliesSuccess('foo', result)).toEqual({
      type: types.FETCH_REPLIES_SUCCESS,
      entities: {
        comments: {
          foo: {
            after: 'a',
            before: 'b',
            id: 'foo',
            replies: 'foo',
          },
        },
        replyRoots: {
          foo: {
            status: 'success',
          },
        },
      },
      id: 'foo',
      result: 'foo',
    })
  })

  it('creates an action to stop fetching replies with failure', () => {
    expect(actions.fetchRepliesFailure('foo', 'Network Error')).toEqual({
      type: types.FETCH_REPLIES_FAILURE,
      id: 'foo',
      message: 'Network Error',
    })
  })
})
