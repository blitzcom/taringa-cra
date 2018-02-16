import _ from 'lodash'
import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'

import { fetch } from '../sagas'
import Taringa from '../../api'

describe('Fetch user saga', () => {
  describe('(a) fetch with success', () => {
    const username = 'foo'
    const it = sagaHelper(fetch({ username }))

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'users/FETCH_REQUEST',
          username: username,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.user.about, username))

      return { id: 1, username: 'foo', message: 'bar' }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'users/FETCH_SUCCESS',
          entities: {
            users: { foo: { id: 1, username: 'foo', message: 'bar' } },
          },
          result: 'foo',
          username: username,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) fetch with failure', () => {
    const username = 'foo'
    const it = sagaHelper(fetch({ username }))

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'users/FETCH_REQUEST',
          username: username,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.user.about, username))

      return new Error('Network Error')
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'users/FETCH_FAILURE',
          message: 'Network Error',
          username: username,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
