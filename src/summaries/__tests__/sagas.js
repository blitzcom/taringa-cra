import _ from 'lodash'
import sagaHelper from 'redux-saga-testing'

import {
  calculateEntitiesToRemove,
  clearFeedTail,
  getFeed,
  getFeeds,
  loadFeed,
  loadFeedTail,
 } from '../sagas'
import { call, put, select } from 'redux-saga/effects'
import Taringa from '../../api'

describe('Load feed saga', () => {
  describe('(a) loads initial feed', () => {
    const it = sagaHelper(loadFeed({ id: 1, url: '/' }))

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 1))
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(put({ type: 'summaries/FETCH_REQUEST', id: 1 }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.url, '/'))
      return { after: 'd', before: 'a', items: [], totalCount: 0 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(put({
        after: 'd',
        before: 'a',
        entities: {},
        id: 1,
        result: [],
        totalCount: 0,
        type: 'summaries/FETCH_SUCCESS',
      }))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) skips load if already has at least 20 items', () => {
    const it = sagaHelper(loadFeed({ id: 1, url: '/' }))

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 1))
      return { ids: _.times(21, String) }
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(c) returns failure', () => {
    const it = sagaHelper(loadFeed({ id: 1, url: '/' }))

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 1))
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(put({ type: 'summaries/FETCH_REQUEST', id: 1 }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.url, '/'))
      return new Error('Network Error')
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(put({
        id: 1,
        message: 'Network Error',
        type: 'summaries/FETCH_FAILURE',
      }))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})

describe('Load feed tail saga', () => {
  describe('(a) loads feed tail', () => {
    const it = sagaHelper(loadFeedTail({ id: 1, url: '/' }))

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 1))

      return { status: 'success', after: 'a' }
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({ type: 'summaries/FETCH_TAIL_REQUEST', id: 1 })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.url, '/', { after: 'a' }))

      return { after: 'd', before: 'a', items: [], totalCount: 0 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(put({
        after: 'd',
        before: 'a',
        entities: {},
        id: 1,
        result: [],
        totalCount: 0,
        type: 'summaries/FETCH_TAIL_SUCCESS',
      }))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) skips if already fetching', () => {
    const it = sagaHelper(loadFeedTail({ id: 1, url: '/', after: 'a' }))

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 1))

      return { status: 'fetching' }
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(c) returns failure', () => {
    const it = sagaHelper(loadFeedTail({ id: 1, url: '/', after: 'a' }))

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 1))

      return { status: 'success', after: 'a' }
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(put({ type: 'summaries/FETCH_TAIL_REQUEST', id: 1 }))
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.url, '/', { after: 'a' }))

      return new Error('Network Error')
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(put({
        id: 1,
        message: 'Network Error',
        type: 'summaries/FETCH_TAIL_FAILURE',
      }))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})

describe('clear feed tail saga', () => {
  describe('(a) removes tail', () => {
    const it = sagaHelper(clearFeedTail({ id: 'trending' }))
    const feed = {
      id: 'trending',
      ids: _.times(30)
    }
    const feeds = {
      trending: feed,
      recents: {
        id: 'recents',
        ids: [23, 24, 25, 26, 27],
      },
      1: {
        id: 1,
        ids: [24, 25, 26, 27, 28]
      }
    }

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 'trending'))

      return feed
    })

    it('takes ids to keep', result => {
      expect(result).toEqual(call(_.take, feed.ids, 20))

      return _.take(feed.ids, 20)
    })

    it('puts an action to reset feed ids', result => {
      expect(result).toEqual(put({
        type: 'summaries/CLEAR_TAIL_IDS',
        id: 'trending',
        ids: _.take(feed.ids, 20)
      }))
    })

    it('get ids to be removed', result => {
      expect(result).toEqual(call(_.difference, feed.ids, _.take(feed.ids, 20)))

      return _.difference(feed.ids, _.times(20))
    })

    it('selects feeds', result => {
      expect(result).toEqual(select(getFeeds))

      return feeds
    })

    it('calculates entities to remove', result => {
      expect(result).toEqual(call(
        calculateEntitiesToRemove,
        feed,
        [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        feeds
      ))

      return calculateEntitiesToRemove(
        feed,
        [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        feeds
      )
    })

    it('puts an action to remove entities', result => {
      expect(result).toEqual(put({
        ids: [20, 21, 22, 29],
        type: 'summaries/REMOVE',
      }))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) skips if has no tail', () => {
    const it = sagaHelper(clearFeedTail({ id: 'trending' }))
    const feed = {
      id: 'trending',
      ids: _.times(20)
    }

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 'trending'))

      return feed
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(c) skips if null id', () => {
    const it = sagaHelper(clearFeedTail({ id: 'trending' }))

    it('selects feed', result => {
      expect(result).toEqual(select(getFeed, 'trending'))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
