import axios from 'axios'
import sagaHelper from 'redux-saga-testing'
import {
  call,
  cancelled,
  cancel,
  fork,
  join,
  put,
  race,
  take,
} from 'redux-saga/effects'
import { createMockTask } from 'redux-saga/utils'

import { search, searchStories, searchUsers, searchChannels } from '../sagas'
import * as actions from '../actions'
import Taringa from '../../api'
import { SEARCH_CLEAR } from '../types'

describe('Search Stories saga', () => {
  it('exists', () => {
    expect(searchStories).toBeDefined()
  })

  describe('searches stories with success', () => {
    const it = sagaHelper(searchStories({ q: 'foo' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search stories request action', result => {
      expect(result).toEqual(put(actions.searchStoriesRequest('foo')))
    })

    it('calls api', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          result: call(Taringa.search.story, 'foo', cancelToken.token),
        })
      )

      return { result: data }
    })

    it('puts search stories success action', result => {
      expect(result).toEqual(put(actions.searchStoriesSuccess(data)))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('clears search', () => {
    const it = sagaHelper(searchStories({ q: 'foo' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search stories request action', result => {
      expect(result).toEqual(put(actions.searchStoriesRequest('foo')))
    })

    it('takes SEARCH_CLEAR', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          result: call(Taringa.search.story, 'foo', cancelToken.token),
        })
      )

      return { clear: { type: SEARCH_CLEAR } }
    })

    it('cancels api call', result => {
      expect(result).toEqual(call(cancelToken.cancel))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('searches stories with failure', () => {
    const it = sagaHelper(searchStories({ q: 'foo' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search stories request action', result => {
      expect(result).toEqual(put(actions.searchStoriesRequest('foo')))
    })

    it('calls api', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          result: call(Taringa.search.story, 'foo', cancelToken.token),
        })
      )

      return new Error('Network Error')
    })

    it('puts search stories failure action', result => {
      expect(result).toEqual(put(actions.searchStoriesFailure('Network Error')))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})

describe('Search Users saga', () => {
  it('exists', () => {
    expect(searchUsers).toBeDefined()
  })

  describe('searches users with success', () => {
    const it = sagaHelper(searchUsers({ q: 'foo' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search stories request action', result => {
      expect(result).toEqual(put(actions.searchUsersRequest('foo')))
    })

    it('calls api', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          result: call(Taringa.search.user, 'foo', cancelToken.token),
        })
      )

      return { result: data }
    })

    it('puts search stories success action', result => {
      expect(result).toEqual(put(actions.searchUsersSuccess(data)))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('searches users with failure', () => {
    const it = sagaHelper(searchUsers({ q: 'foo' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search stories request action', result => {
      expect(result).toEqual(put(actions.searchUsersRequest('foo')))
    })

    it('calls api', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          result: call(Taringa.search.user, 'foo', cancelToken.token),
        })
      )

      return new Error('Network Error')
    })

    it('puts search stories failure action', result => {
      expect(result).toEqual(put(actions.searchUsersFailure('Network Error')))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})

describe('Search Channels saga', () => {
  it('exists', () => {
    expect(searchChannels).toBeDefined()
  })

  describe('searches channels with success', () => {
    const it = sagaHelper(searchChannels({ q: 'foo' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search channels request action', result => {
      expect(result).toEqual(put(actions.searchChannelsRequest('foo')))
    })

    it('calls api', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          result: call(Taringa.search.channel, 'foo', cancelToken.token),
        })
      )

      return { result: data }
    })

    it('puts search channels success action', result => {
      expect(result).toEqual(put(actions.searchChannelsSuccess(data)))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('searches channels with failure', () => {
    const it = sagaHelper(searchChannels({ q: 'foo' }))
    const cancelToken = axios.CancelToken.source()
    const data = { totalCount: 0, items: [] }

    it('gets a cancel token', result => {
      expect(result).toEqual(call(axios.CancelToken.source))
      return cancelToken
    })

    it('puts search channels request action', result => {
      expect(result).toEqual(put(actions.searchChannelsRequest('foo')))
    })

    it('calls api', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          result: call(Taringa.search.channel, 'foo', cancelToken.token),
        })
      )

      return new Error('Network Error')
    })

    it('puts search channels failure action', result => {
      expect(result).toEqual(
        put(actions.searchChannelsFailure('Network Error'))
      )
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})

describe('Search saga', () => {
  it('exists', () => {
    expect(search).toBeDefined()
  })

  describe('searches', () => {
    const action = { q: 'foo' }
    const it = sagaHelper(search(action))
    const storiesTask = createMockTask()
    const usersTask = createMockTask()
    const channelsTask = createMockTask()

    it('puts a search start action', result => {
      expect(result).toEqual(put(actions.searchStart(action.q)))
    })

    it('forks search stories', result => {
      expect(result).toEqual(fork(searchStories, action))
      return storiesTask
    })

    it('forks search users', result => {
      expect(result).toEqual(fork(searchUsers, action))
      return usersTask
    })

    it('forks search channels', result => {
      expect(result).toEqual(fork(searchChannels, action))
      return channelsTask
    })

    it('creates a race effect', result => {
      expect(result).toEqual(join(storiesTask, usersTask, channelsTask))
      return {}
    })

    it('puts search finish action', result => {
      expect(result).toEqual(put(actions.searchFinish()))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
