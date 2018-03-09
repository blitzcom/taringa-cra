import _ from 'lodash'
import sagaHelper from 'redux-saga-testing'
import { call, put, select, fork } from 'redux-saga/effects'

import { loadComments } from '../../comments/sagas'
import { loadStory, getStory } from '../sagas'
import { fetch as fetchUser } from '../../users/sagas'
import Taringa from '../../api'

describe('Load story saga', () => {
  describe('(a) loads with success', () => {
    const id = 1
    const it = sagaHelper(loadStory({ id }))

    it('selects story', result => {
      expect(result).toEqual(select(getStory, id))
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'stories/FETCH_REQUEST',
          id,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.story.byId, id))

      return { id, owner: { username: 'foo' } }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          type: 'stories/FETCH_SUCCESS',
          entities: { stories: { [id]: { id, owner: { username: 'foo' } } } },
          id,
          result: 1,
        })
      )
    })

    it('forks to load comments', result => {
      expect(result).toEqual(fork(loadComments, { id }))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) skips if fetching', () => {
    const id = 2
    const it = sagaHelper(loadStory({ id }))

    it('selects story', result => {
      expect(result).toEqual(select(getStory, id))

      return { id, status: 'fetching' }
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(c) loads with failure', () => {
    const id = 3
    const it = sagaHelper(loadStory({ id }))

    it('selects story', result => {
      expect(result).toEqual(select(getStory, id))

      return { id, status: 'success' }
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({
          type: 'stories/FETCH_REQUEST',
          id,
        })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.story.byId, id))

      return new Error('Network Error')
    })

    it('puts fetch failure action', result => {
      expect(result).toEqual(
        put({
          type: 'stories/FETCH_FAILURE',
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
