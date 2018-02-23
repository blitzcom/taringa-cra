import * as types from '../types'
import * as actions from '../actions'

describe('Channel actions', () => {
  it('creates an action to trigger a channel fetch', () => {
    expect(actions.fetchTrigger('foo')).toEqual({
      type: types.FETCH_TRIGGER,
      name: 'foo',
    })
  })

  it('creates an action to start a fetch request', () => {
    expect(actions.fetchRequest('foo')).toEqual({
      type: types.FETCH_REQUEST,
      name: 'foo',
    })
  })

  it('creates an action to finish a fetch with success', () => {
    const channel = { name: 'foo', bar: 'baz' }

    expect(actions.fetchSuccess('foo', channel)).toEqual({
      type: types.FETCH_SUCCESS,
      name: 'foo',
      entities: {
        channels: {
          foo: { name: 'foo', bar: 'baz' },
        },
      },
      result: 'foo',
    })
  })

  it('creates an action to finish a fetch with failure', () => {
    expect(actions.fetchFailure('foo', 'Network Error')).toEqual({
      type: types.FETCH_FAILURE,
      name: 'foo',
      message: 'Network Error',
    })
  })
})
