import _ from 'lodash'
import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'

import Taringa from '../../api'
import { loadComments } from '../sagas'

describe('Load comments saga', () => {
  describe('(a) loads with success', () => {
    const id = 'a'
    const it = sagaHelper(loadComments(id))

    it('puts fetch request action', result => {
      expect(result).toEqual(put({
        type: 'comments/FETCH_REQUEST',
        id: id
      }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.story.comments, id))

      return { items: [{ id: 2 }], before: 2 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(put({
        type: 'comments/FETCH_SUCCESS',
        before: 2,
        entities: { comments: { 2: { id: 2 } } },
        id: id,
        result: [2]
      }))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) loads with failure', () => {
    const id = 'b'
    const it = sagaHelper(loadComments(id))

    it('puts fetch request action', result => {
      expect(result).toEqual(put({
        type: 'comments/FETCH_REQUEST',
        id: id
      }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.story.comments, id))

      return new Error('Network Error')
    })

    it('puts fetch failure action', result => {
      expect(result).toEqual(put({
        type: 'comments/FETCH_FAILURE',
        id: id,
        message: 'Network Error'
      }))
    })
  })
})
