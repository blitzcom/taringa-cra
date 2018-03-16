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

  describe('creates an action to stop fetching comments with success', () => {
    it('creates default', () => {
      expect(actions.fetchSuccess(1)).toEqual({
        type: types.FETCH_SUCCESS,
        id: 1,
        strategy: REPLACE,
      })
    })

    it('changes strategy', () => {
      expect(actions.fetchSuccess(1, PUSH)).toEqual({
        type: types.FETCH_SUCCESS,
        id: 1,
        strategy: PUSH,
      })
    })
  })

  it('creates an action to stop fetching comments with failure', () => {
    expect(actions.fetchFailure(1, 'Network Error')).toEqual({
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'Network Error',
    })
  })

  describe('creates an action to trigger load comments', () => {
    it('creates default', () => {
      expect(actions.load(1)).toEqual({
        type: types.FETCH_TRIGGER,
        id: 1,
        strategy: REPLACE,
      })
    })

    it('changes strategy', () => {
      expect(actions.load(1, PUSH)).toEqual({
        type: types.FETCH_TRIGGER,
        id: 1,
        strategy: PUSH,
      })
    })
  })
})
