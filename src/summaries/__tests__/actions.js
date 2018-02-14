import * as types from '../types'
import * as actions from '../actions'

describe('Summaries actions', () => {
  it('creates an action to start fetching summaries', () => {
    expect(actions.fetchRequest(1)).toEqual({
      type: types.FETCH_REQUEST,
      id: 1
    })
  })

  it('creates an action to finish fetching summaries with success', () => {
    expect(actions.fetchSuccess(1)).toEqual({
      type: types.FETCH_SUCCESS,
      id: 1
    })
  })

  it('creates an action to finish fetching summaries with failure', () => {
    expect(actions.fetchFailure(1, 'Network Error')).toEqual({
      type: types.FETCH_FAILURE,
      message: 'Network Error',
      id: 1
    })
  })
})
