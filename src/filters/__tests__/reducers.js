import { filters } from '../reducers'
import * as types from '../types'

describe('Filters reducer', () => {
  it('exists', () => {
    expect(filters).toBeDefined()
  })

  it('returns initial state', () => {
    expect(filters(undefined, {})).toEqual({})
  })

  it('handles SET', () => {
    const action = {
      type: types.SET,
      filters: { id: 'foo' },
    }

    expect(filters(undefined, action)).toEqual({
      id: 'foo',
    })
  })

  it('handles CLEAR', () => {
    const action = {
      type: types.CLEAR,
    }

    const state = {
      id: 'foo',
    }

    expect(filters(state, action)).toEqual({})
  })
})
