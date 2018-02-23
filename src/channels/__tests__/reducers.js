import * as types from '../types'
import { channelEntities, channelsFetchControl } from '../reducers'

describe('Channel entities reducer', () => {
  it('exists', () => {
    expect(channelEntities).toBeDefined()
  })

  it('returns initial state', () => {
    expect(channelEntities(undefined, {})).toEqual({})
  })

  it('merges channels', () => {
    const action = {
      type: 'any',
      entities: {
        channels: {
          1: { id: 1, foo: 'foo', bar: 'bar' },
          2: { id: 2, foo: 'foo', bar: 'bar' },
        },
      },
    }

    expect(channelEntities(undefined, action)).toEqual({
      1: { id: 1, foo: 'foo', bar: 'bar' },
      2: { id: 2, foo: 'foo', bar: 'bar' },
    })
  })
})

describe('Channel fetch control reducer', () => {
  it('exists', () => {
    expect(channelsFetchControl).toBeDefined()
  })

  it('returns initial state', () => {
    expect(channelsFetchControl(undefined, {})).toEqual({})
  })

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 'foo',
    }

    const state = {}

    expect(channelsFetchControl(undefined, action)).toEqual({
      foo: { status: 'fetching', error: '' },
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      id: 'foo',
    }

    const state = {
      foo: { status: 'fetching', error: '' },
    }

    expect(channelsFetchControl(undefined, action)).toEqual({
      foo: { status: 'success', error: '' },
    })
  })

  it('handles FETCH_SUCCESS from FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      id: 'foo',
    }

    const state = {
      foo: { status: 'failure', error: 'Network Error' },
    }

    expect(channelsFetchControl(undefined, action)).toEqual({
      foo: { status: 'success', error: '' },
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      id: 'foo',
      message: 'Network Error',
    }

    const state = {
      foo: { status: 'fetching', error: '' },
    }

    expect(channelsFetchControl(undefined, action)).toEqual({
      foo: { status: 'failure', error: 'Network Error' },
    })
  })
})
