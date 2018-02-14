import _ from 'lodash'
import { normalize } from 'normalizr'
import { call, put, select } from 'redux-saga/effects'

import * as actions from './actions'
import { summary } from './schemas'
import Taringa from '../api'

export const getFeed = (state, id) => state.feed[id]

export function* loadFeed({ id, url }) {
  const feed = yield select(getFeed, id)

  if (feed && 'ids' in feed && feed.ids.length > 20) {
    return
  }

  try {
    yield put(actions.fetchRequest(id))

    const { after, before, totalCount, items } = yield call(Taringa.url, url)

    const action = _.assign(
      {},
      normalize(items, [summary]),
      actions.fetchSuccess(id),
      { after, before, totalCount }
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}

export function* loadFeedTail({ id, url, after: afterCursor }) {
  const feed = yield select(getFeed, id)

  if (feed.status === 'fetching') {
    return
  }

  try {
    yield put(actions.fetchTailRequest(id))

    const { after, before, items, totalCount } = yield call(Taringa.url, url, {
      after: afterCursor,
    })

    const action = _.assign(
      {},
      normalize(items, [summary]),
      actions.fetchTailSuccess(id),
      { after, before, totalCount }
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchTailFailure(id, e.message))
  }
}

export const getId = pathname => {
  switch (pathname) {
    case '/tops':
      return 'tops'
    case '/recents':
      return 'recents'
    case '/':
      return 'trending'
    default:
      return null
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

export function* clearFeedTail({ pathname }) {
  const id = yield call(getId, pathname)

  if (!id) {
    return
  }

  const feed = yield select(getFeed, id)

  if (feed && 'ids' in feed && feed.ids.length <= 20) {
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