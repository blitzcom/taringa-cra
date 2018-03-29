import { call, put, select } from 'redux-saga/effects'

import * as actions from './actions'
import Taringa from '../api'

export const getFeed = (state, id) => state.feed[id] || {}

export function* loadFeed({ id, url, strategy }) {
  const feed = yield select(getFeed, id)

  if (feed.status === 'fetching') {
    return
  }

  const params = { after: feed.after, count: 40 }

  try {
    yield put(actions.fetchRequest(id))

    const result = yield call(Taringa.url, url, params)

    yield put(actions.fetchSuccess(id, result))
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}
