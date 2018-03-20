import _ from 'lodash'
import { normalize } from 'normalizr'
import { call, put, select } from 'redux-saga/effects'

import * as actions from './actions'
import { summary } from './schemas'
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

export function* loadFeedTail({ id, url }) {
  const feed = yield select(getFeed, id)

  if (feed.status === 'fetching') {
    return
  }

  const params = { after: feed.after }

  try {
    yield put(actions.fetchTailRequest(id))

    const { items, ...rest } = yield call(Taringa.url, url, params)

    const action = _.assign(
      {},
      normalize(items, [summary]),
      actions.fetchTailSuccess(id),
      rest
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchTailFailure(id, e.message))
  }
}

export const getFeeds = state => state.feed

export const calculateEntitiesToRemove = (feed, idsToRemove, feeds) => {
  const { id } = feed

  const totalEntitiesIds = _.reduce(
    feeds,
    (result, value, key) => {
      if (key === id) {
        return result
      }
      return _.union(result, value.ids)
    },
    []
  )

  return _.difference(idsToRemove, totalEntitiesIds)
}

export function* clearFeedTail({ id }) {
  const feed = yield select(getFeed, id)

  if (!feed) {
    return
  }

  if (feed.ids && feed.ids.length <= 20) {
    return
  }

  const mantainIds = yield call(_.take, feed.ids, 20)
  yield put(actions.clearTailIds(id, mantainIds))

  const idsToRemoveFromFeed = yield call(_.difference, feed.ids, mantainIds)
  const feeds = yield select(getFeeds)

  const totalIdsToRemove = yield call(
    calculateEntitiesToRemove,
    feed,
    idsToRemoveFromFeed,
    feeds
  )

  yield put(actions.remove(totalIdsToRemove))
}
