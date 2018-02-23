import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'

import { fetch } from '../sagas'
import Taringa from '../../api'

describe('Fetch channel saga', () => {
  it('exists', () => {
    expect(fetch).toBeDefined()
  })

  describe('(a) fetch with success', () => {
    const name = 'foo'
    const it = sagaHelper(fetch({ name }))

    it('puts fetch request action', result => {
      expect(result).toEqual(put({ type: 'channels/FETCH_REQUEST', name }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.channel.about, name))

      return { name: 'foo', foo: 'bar' }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'channels/FETCH_SUCCESS',
          entities: {
            channels: { foo: { name: 'foo', foo: 'bar' } },
          },
          result: 'foo',
          name,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) fetch with failure', () => {
    const name = 'foo'
    const it = sagaHelper(fetch({ name }))

    it('puts fetch request action', result => {
      expect(result).toEqual(put({ type: 'channels/FETCH_REQUEST', name }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.channel.about, name))

      return new Error('Network Error')
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'channels/FETCH_FAILURE',
          name,
          message: 'Network Error',
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
