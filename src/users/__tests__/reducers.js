import { usersEntities, usersFetchControl } from '../reducers'
import * as types from '../types'

describe('Users entities', () => {
  it('exists', () => {
    expect(usersEntities).toBeDefined()
  })

  it('returns initial state', () => {
    expect(usersEntities(undefined, {})).toEqual({})
  })

  it('merges users', () => {
    const action = {
      type: 'any',
      entities: {
        users: {
          1: { id: 1, foo: 'foo', bar: 'bar' },
          2: { id: 2, foo: 'foo', bar: 'bar' },
        },
      },
    }

    expect(usersEntities(undefined, action)).toEqual({
      1: { id: 1, foo: 'foo', bar: 'bar' },
      2: { id: 2, foo: 'foo', bar: 'bar' },
    })
  })
})

describe('Users fetch control', () => {
  it('exists', () => {
    expect(usersFetchControl).toBeDefined()
  })

  it('returns initial state', () => {
    expect(usersFetchControl(undefined, {})).toEqual({})
  })

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST,
      username: 'foo',
    }

    expect(usersFetchControl(undefined, action)).toEqual({
      foo: { status: 'fetching', error: '' },
    })
  })

  it('handles FETCH_REQUEST from FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_REQUEST,
      username: 'foo',
    }

    const state = {
      foo: { status: 'failure', error: 'Network Error' },
    }

    expect(usersFetchControl(state, action)).toEqual({
      foo: { status: 'fetching', error: '' },
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      username: 'foo',
    }

    const state = {
      foo: { status: 'fetching', error: '' },
    }

    expect(usersFetchControl(state, action)).toEqual({
      foo: { status: 'success', error: '' },
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      username: 'foo',
      message: 'Network Error',
    }

    const state = {
      foo: { status: 'fetching', error: '' },
    }

    expect(usersFetchControl(state, action)).toEqual({
      foo: { status: 'failure', error: 'Network Error' },
    })
  })
})
