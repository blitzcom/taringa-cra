import * as actions from '../actions'
import * as types from '../types'

describe('Users actions', () => {
  it('creates an action to start a fetching request', () => {
    expect(actions.fetchRequest('foo')).toEqual({
      type: types.FETCH_REQUEST,
      username: 'foo'
    })
  })

  it('creates an action to finish fetching with success', () => {
    const user = {
      id: 1,
      username: 'foo',
      message: 'bar'
    }

    expect(actions.fetchSuccess('foo', user)).toEqual({
      type: types.FETCH_SUCCESS,
      username: 'foo',
      result: 'foo',
      entities: {
        users: {
          foo:  { id: 1, username: 'foo', message: 'bar' }
        }
      }
    })
  })

  it('creates an action to finish fetching with failure', () => {
    expect(actions.fetchFailure('foo', 'bar')).toEqual({
      type: types.FETCH_FAILURE,
      username: 'foo',
      message: 'bar'
    })
  })
})
