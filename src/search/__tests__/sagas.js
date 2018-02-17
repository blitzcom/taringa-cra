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

import { search, searchStories, searchUsers } from '../sagas'
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
        call(Taringa.search.story, 'foo', cancelToken.token)
      )

      return data
    })

    it('puts search stories success action', result => {
      expect(result).toEqual(put(actions.searchStoriesSuccess(data)))
    })

    it('checks for cancel', result => {
      expect(result).toEqual(cancelled())
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
        call(Taringa.search.story, 'foo', cancelToken.token)
      )

      return new Error('Network Error')
    })

    it('puts search stories failure action', result => {
      expect(result).toEqual(put(actions.searchStoriesFailure('Network Error')))
    })

    it('checks for cancel', result => {
      expect(result).toEqual(cancelled())
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
        call(Taringa.search.user, 'foo', cancelToken.token)
      )

      return data
    })

    it('puts search stories success action', result => {
      expect(result).toEqual(put(actions.searchUsersSuccess(data)))
    })

    it('checks for cancel', result => {
      expect(result).toEqual(cancelled())
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
        call(Taringa.search.user, 'foo', cancelToken.token)
      )

      return new Error('Network Error')
    })

    it('puts search stories failure action', result => {
      expect(result).toEqual(put(actions.searchUsersFailure('Network Error')))
    })

    it('checks for cancel', result => {
      expect(result).toEqual(cancelled())
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

    it('creates a race effect', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          complete: join(storiesTask, usersTask),
        })
      )

      return {}
    })

    it('puts search finish action', result => {
      expect(result).toEqual(put(actions.searchFinish()))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('cancels search', () => {
    const action = { q: 'foo' }
    const it = sagaHelper(search(action))
    const storiesTask = createMockTask()
    const usersTask = createMockTask()

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

    it('creates a race effect', result => {
      expect(result).toEqual(
        race({
          clear: take(SEARCH_CLEAR),
          complete: join(storiesTask, usersTask),
        })
      )

      return { clear: take(SEARCH_CLEAR) }
    })

    it('cancels search stories', result => {
      expect(result).toEqual(cancel(storiesTask))
    })

    it('cancels search users', result => {
      expect(result).toEqual(cancel(usersTask))
    })

    it('puts search finish action', result => {
      expect(result).toEqual(put(actions.searchFinish()))
    })

    it('ends', result => {
      expect(result).toBeUndefined()
    })
  })
})
