import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'

import { fetch } from '../sagas'
import Taringa from '../../api'

describe('Fetch channel saga', () => {
  it('exists', () => {
    expect(fetch).toBeDefined()
  })

  describe('(a) fetch with success', () => {
    const id = 'foo'
    const it = sagaHelper(fetch({ id }))

    it('puts fetch request action', result => {
      expect(result).toEqual(put({ type: 'channels/FETCH_REQUEST', id }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.channel.about, id))

      return { id: 'foo', foo: 'bar' }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'channels/FETCH_SUCCESS',
          entities: {
            channels: { foo: { id: 'foo', foo: 'bar' } },
          },
          result: 'foo',
          id,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) fetch with failure', () => {
    const id = 'foo'
    const it = sagaHelper(fetch({ id }))

    it('puts fetch request action', result => {
      expect(result).toEqual(put({ type: 'channels/FETCH_REQUEST', id }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.channel.about, id))

      return new Error('Network Error')
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'channels/FETCH_FAILURE',
          id,
          message: 'Network Error',
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
