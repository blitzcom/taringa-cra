import axios from 'axios'
import { call, fork, join, put, race, take } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'
import { SEARCH_CLEAR } from './types'

export function* searchStories({ q }) {
  const cancelToken = yield call(axios.CancelToken.source)

  try {
    yield put(actions.searchStoriesRequest(q))

    const { clear, result } = yield race({
      clear: take(SEARCH_CLEAR),
      result: call(Taringa.search.story, q, cancelToken.token),
    })

    if (clear && cancelToken) {
      yield call(cancelToken.cancel)
      return
    }

    yield put(actions.searchStoriesSuccess(result))
  } catch (e) {
    yield put(actions.searchStoriesFailure(e.message))
  }
}

export function* searchUsers({ q }) {
  const cancelToken = yield call(axios.CancelToken.source)

  try {
    yield put(actions.searchUsersRequest(q))

    const { clear, result } = yield race({
      clear: take(SEARCH_CLEAR),
      result: call(Taringa.search.user, q, cancelToken.token),
    })

    if (clear && cancelToken) {
      yield call(cancelToken.cancel)
      return
    }

    yield put(actions.searchUsersSuccess(result))
  } catch (e) {
    yield put(actions.searchUsersFailure(e.message))
  }
}

export function* searchChannels({ q }) {
  const cancelToken = yield call(axios.CancelToken.source)

  try {
    yield put(actions.searchChannelsRequest(q))

    const { clear, result } = yield race({
      clear: take(SEARCH_CLEAR),
      result: call(Taringa.search.channel, q, cancelToken.token),
    })

    if (clear && cancelToken) {
      yield call(cancelToken.cancel)
      return
    }

    yield put(actions.searchChannelsSuccess(result))
  } catch (e) {
    yield put(actions.searchChannelsFailure(e.message))
  }
}

export function* search({ q }) {
  yield put(actions.searchStart(q))

  const storiesTask = yield fork(searchStories, { q })
  const usersTask = yield fork(searchUsers, { q })
  const channelsTask = yield fork(searchChannels, { q })

  yield join(storiesTask, usersTask, channelsTask)
  yield put(actions.searchFinish())
}
