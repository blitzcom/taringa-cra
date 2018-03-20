import _ from 'lodash'
import sagaHelper from 'redux-saga-testing'

import { getFeed, loadFeed } from '../sagas'
import { call, put, select } from 'redux-saga/effects'
import Taringa from '../../api'

describe('Load feed saga', () => {
  describe('(a) loads initial feed', () => {
    const it = sagaHelper(loadFeed({ id: 1, url: '/', strategy: 'REPLACE' }))

    it('loads feed state', result => {
      expect(result).toEqual(select(getFeed, 1))
      return {}
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({ type: 'summaries/FETCH_REQUEST', id: 1, strategy: 'REPLACE' })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.url, '/', {}))
      return { after: 'd', before: 'a', items: [], totalCount: 0 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          after: 'd',
          before: 'a',
          entities: {},
          id: 1,
          result: [],
          strategy: 'REPLACE',
          totalCount: 0,
          type: 'summaries/FETCH_SUCCESS',
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(b) loads with push strategy', () => {
    const it = sagaHelper(loadFeed({ id: 1, url: '/', strategy: 'PUSH' }))

    it('loads feed state', result => {
      expect(result).toEqual(select(getFeed, 1))
      return { after: 'a' }
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({ type: 'summaries/FETCH_REQUEST', id: 1, strategy: 'PUSH' })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.url, '/', { after: 'a' }))
      return { after: 'd', before: 'a', items: [], totalCount: 0 }
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          after: 'd',
          before: 'a',
          entities: {},
          id: 1,
          result: [],
          strategy: 'PUSH',
          totalCount: 0,
          type: 'summaries/FETCH_SUCCESS',
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('(c) returns failure', () => {
    const it = sagaHelper(loadFeed({ id: 1, url: '/', strategy: 'REPLACE' }))

    it('loads feed state', result => {
      expect(result).toEqual(select(getFeed, 1))
      return {}
    })

    it('puts fetch request action', result => {
      expect(result).toEqual(
        put({ type: 'summaries/FETCH_REQUEST', id: 1, strategy: 'REPLACE' })
      )
    })

    it('calls api', result => {
      expect(result).toEqual(call(Taringa.url, '/', {}))
      return new Error('Network Error')
    })

    it('puts fetch success action', result => {
      expect(result).toEqual(
        put({
          id: 1,
          message: 'Network Error',
          type: 'summaries/FETCH_FAILURE',
        })
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
