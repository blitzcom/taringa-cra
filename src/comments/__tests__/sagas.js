import _ from 'lodash'
import sagaHelper from 'redux-saga-testing'
import { call, put, select } from 'redux-saga/effects'

import Taringa from '../../api'
import { loadComments, getCommentsControl } from '../sagas'

describe('Load comments saga', () => {
  describe('(a) loads with success', () => {
    const id = 'a'
    const it = sagaHelper(loadComments({ id }))

    it('selects control', result => {
      expect(result).toEqual(select(getCommentsControl, id))
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REQUEST',
          id: id,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.story.comments, id, {}))

      return { id, items: [{ id: 2 }], before: 3 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_SUCCESS',
          entities: {
            comments: { 2: { id: 2 } },
            commentRoot: { [id]: { id, items: [2], before: 3 } },
          },
          strategy: 'REPLACE',
          id: id,
          result: id,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) loads with failure', () => {
    const id = 'b'
    const it = sagaHelper(loadComments({ id }))

    it('selects control', result => {
      expect(result).toEqual(select(getCommentsControl, id))
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REQUEST',
          id: id,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.story.comments, id, {}))

      return new Error('Network Error')
    })

    it('puts fetch failure action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_FAILURE',
          id: id,
          message: 'Network Error',
        })
      )
    })
  })

  describe('(c) uses PUSH strategy', () => {
    const id = 'c'
    const it = sagaHelper(loadComments({ id, strategy: 'PUSH' }))

    it('selects control', result => {
      expect(result).toEqual(select(getCommentsControl, id))

      return { after: 'c' }
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REQUEST',
          id: id,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.story.comments, id, { after: 'c' }))

      return { id, items: [{ id: 2 }], before: 3 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_SUCCESS',
          entities: {
            comments: { 2: { id: 2 } },
            commentRoot: { [id]: { id, items: [2], before: 3 } },
          },
          strategy: 'PUSH',
          id: id,
          result: id,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
