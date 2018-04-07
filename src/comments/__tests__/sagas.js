import _ from 'lodash'
import sagaHelper from 'redux-saga-testing'
import { call, put, select } from 'redux-saga/effects'

import Taringa from '../../api'
import {
  fetchReplies,
  getCommentsControl,
  getRepliesControl,
  loadComments,
} from '../sagas'

describe('Load comments saga', () => {
  describe('(a) loads with success', () => {
    const id = 'a'
    const it = sagaHelper(loadComments({ id }))

    it('selects control', result => {
      expect(result).toEqual(select(getCommentsControl, id))

      return {}
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
          id: id,
          result: id,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) loads next cursor', () => {
    const id = 'a'
    const it = sagaHelper(loadComments({ id }))

    it('selects control', result => {
      expect(result).toEqual(select(getCommentsControl, id))

      return { after: 'a' }
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
      expect(result).toEqual(call(Taringa.story.comments, id, { after: 'a' }))

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
          id: id,
          result: id,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(c) loads with failure', () => {
    const id = 'b'
    const it = sagaHelper(loadComments({ id }))

    it('selects control', result => {
      expect(result).toEqual(select(getCommentsControl, id))
      return {}
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
})

describe('Fetch replies saga', () => {
  describe('(a) loads with success', () => {
    const id = 'a'
    const it = sagaHelper(fetchReplies({ id }))

    it('selects control', result => {
      expect(result).toEqual(select(getRepliesControl, id))

      return {}
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REPLIES_REQUEST',
          id: id,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.comment.byId, id, {}))

      return { id, replies: [], before: 3 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REPLIES_SUCCESS',
          entities: {
            comments: { [id]: { before: 3, id, replies: id } },
            replyRoots: { [id]: { status: 'success' } },
          },
          id: id,
          result: id,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) loads next cursor', () => {
    const id = 'a'
    const it = sagaHelper(fetchReplies({ id }))

    it('selects control', result => {
      expect(result).toEqual(select(getRepliesControl, id))

      return { after: 'a' }
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REPLIES_REQUEST',
          id: id,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.comment.byId, id, { after: 'a' }))

      return { id, replies: [], before: 3 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REPLIES_SUCCESS',
          entities: {
            comments: { [id]: { before: 3, id, replies: id } },
            replyRoots: { [id]: { status: 'success' } },
          },
          id: id,
          result: id,
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(c) loads with failure', () => {
    const id = 'b'
    const it = sagaHelper(fetchReplies({ id }))

    it('selects control', result => {
      expect(result).toEqual(select(getRepliesControl, id))
      return {}
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REPLIES_REQUEST',
          id: id,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.comment.byId, id, {}))

      return new Error('Network Error')
    })

    it('puts fetch failure action', result => {
      expect(result).toEqual(
        put({
          type: 'comments/FETCH_REPLIES_FAILURE',
          id: id,
          message: 'Network Error',
        })
      )
    })
  })
})
