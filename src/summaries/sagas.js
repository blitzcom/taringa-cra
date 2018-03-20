import _ from 'lodash'
import { call, put, select } from 'redux-saga/effects'

import * as actions from './actions'
import Taringa from '../api'
import { PUSH } from '../constants'

export const getFeed = (state, id) => state.feed[id] || {}

export function* loadFeed({ id, url, strategy }) {
  const feed = yield select(getFeed, id)

  if (feed.status === 'fetching') {
    return
  }

  let params = {}

  if (strategy === PUSH) {
    params = _.assign({}, params, { after: feed.after })
  }

  try {
    yield put(actions.fetchRequest(id, strategy))

    const result = yield call(Taringa.url, url, params)

    yield put(actions.fetchSuccess(id, result, strategy))
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}
