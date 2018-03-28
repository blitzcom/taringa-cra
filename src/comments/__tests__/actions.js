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
