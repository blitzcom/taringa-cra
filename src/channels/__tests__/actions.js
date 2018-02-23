import * as types from '../types'
import * as actions from '../actions'

describe('Channel actions', () => {
  it('creates an action to trigger a channel fetch', () => {
    expect(actions.fetchTrigger('id')).toEqual({
      type: types.FETCH_TRIGGER,
      id: 'id',
    })
  })

  it('creates an action to start a fetch request', () => {
    expect(actions.fetchRequest('id')).toEqual({
      type: types.FETCH_REQUEST,
      id: 'id',
    })
  })

  it('creates an action to finish a fetch with success', () => {
    expect(actions.fetchSuccess('id')).toEqual({
      type: types.FETCH_SUCCESS,
      id: 'id',
    })
  })

  it('creates an action to finish a fetch with failure', () => {
    expect(actions.fetchFailure('id', 'Network Error')).toEqual({
      type: types.FETCH_FAILURE,
      id: 'id',
      message: 'Network Error',
    })
  })
})
