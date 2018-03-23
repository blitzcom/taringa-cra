import axios from 'axios'
import sagaHelper from 'redux-saga-testing'
import { call, put, race, take } from 'redux-saga/effects'

import { searching } from '../sagas'
import * as actions from '../actions'
import Taringa from '../../api'
import { SEARCH_CANCEL } from '../types'

describe('Search Channels saga', () => {
  it('exists', () => {
    expect(searching).toBeDefined()
  })

  describe('searches with success', () => {
    const it = sagaHelper(searching({ id: 'stories', q: 'bar' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search request action', result => {
      expect(result).toEqual(put(actions.searchRequest('stories', 'bar')))
    })

    it('calls api', result => {
      expect(result).toEqual(
        race({
          cancel: take(SEARCH_CANCEL),
          result: call(Taringa.search.story, 'bar', cancelToken.token),
        })
      )

      return { result: data }
    })

    it('puts search success action', result => {
      expect(result).toEqual(put(actions.searchSuccess('stories', data)))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('cancels search', () => {
    const it = sagaHelper(searching({ id: 'stories', q: 'bar' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search request action', result => {
      expect(result).toEqual(put(actions.searchRequest('stories', 'bar')))
    })

    it('calls api', result => {
      expect(result).toEqual(
        race({
          cancel: take(SEARCH_CANCEL),
          result: call(Taringa.search.story, 'bar', cancelToken.token),
        })
      )

      return { cancel: { type: SEARCH_CANCEL } }
    })

    it('cancels api call', result => {
      expect(result).toEqual(call(cancelToken.cancel))
    })

    it('puts clear action', result => {
      expect(result).toEqual(put(actions.searchClear('stories')))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
