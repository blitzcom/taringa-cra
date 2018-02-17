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
  const cancelToken = axios.CancelToken.source()

  try {
    yield put(actions.searchStoriesRequest(q))

    const stories = yield call(Taringa.search.story, q, cancelToken.token)

    yield put(actions.searchStoriesSuccess(stories))
  } catch (e) {
    yield put(actions.searchStoriesFailure(e.message))
  } finally {
    if (yield cancelled()) {
      cancelToken.cancel()
    }
  }
}

export function* searchUsers({ q }) {
  const cancelToken = axios.CancelToken.source()

  try {
    yield put(actions.searchUsersRequest(q))

    const users = yield call(Taringa.search.user, q, cancelToken.token)

    yield put(actions.searchUsersSuccess(users))
  } catch (e) {
    yield put(actions.searchUsersFailure(e.message))
  } finally {
    if (yield cancelled()) {
      cancelToken.cancel()
    }
  }
}

export function* search({ q }) {
  yield put(actions.searchStart(q))

  const storiesTask = yield fork(searchStories, { q })
  const usersTask = yield fork(searchUsers, { q })

  const { clear } = yield race({
    clear: take(SEARCH_CLEAR),
    complete: join(storiesTask, usersTask),
  })

  if (clear) {
    yield cancel(storiesTask)
    yield cancel(usersTask)
  }

  yield put(actions.searchFinish())
}
