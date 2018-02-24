import axios from 'axios'
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

import Taringa from '../api'
import * as actions from './actions'
import { SEARCH_CLEAR } from './types'

export function* searchStories({ q }) {
  const cancelToken = yield call(axios.CancelToken.source)

  try {
    yield put(actions.searchStoriesRequest(q))

    const stories = yield call(Taringa.search.story, q, cancelToken.token)

    yield put(actions.searchStoriesSuccess(stories))
  } catch (e) {
    yield put(actions.searchStoriesFailure(e.message))
  } finally {
    if (yield cancelled()) {
      if (cancelToken) {
        yield call(cancelToken.cancel)
      }
    }
  }
}

export function* searchUsers({ q }) {
  const cancelToken = yield call(axios.CancelToken.source)

  try {
    yield put(actions.searchUsersRequest(q))

    const users = yield call(Taringa.search.user, q, cancelToken.token)

    yield put(actions.searchUsersSuccess(users))
  } catch (e) {
    yield put(actions.searchUsersFailure(e.message))
  } finally {
    if (yield cancelled()) {
      if (cancelToken) {
        yield call(cancelToken.cancel)
      }
    }
  }
}

export function* searchChannels({ q }) {
  const cancelToken = yield call(axios.CancelToken.source)

  try {
    yield put(actions.searchChannelsRequest(q))

    const users = yield call(Taringa.search.channel, q, cancelToken.token)

    yield put(actions.searchChannelsSuccess(users))
  } catch (e) {
    yield put(actions.searchChannelsFailure(e.message))
  } finally {
    if (yield cancelled()) {
      if (cancelToken) {
        yield call(cancelToken.cancel)
      }
    }
  }
}

export function* search({ q }) {
  yield put(actions.searchStart(q))

  const storiesTask = yield fork(searchStories, { q })
  const usersTask = yield fork(searchUsers, { q })
  const channelsTask = yield fork(searchChannels, { q })

  const { clear } = yield race({
    clear: take(SEARCH_CLEAR),
    complete: join(storiesTask, usersTask, channelsTask),
  })

  if (clear) {
    yield cancel(storiesTask)
    yield cancel(usersTask)
    yield cancel(channelsTask)
  }

  yield put(actions.searchFinish())
}
