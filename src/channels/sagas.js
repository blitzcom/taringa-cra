import { call, put, select } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'

export function* fetch({ name }) {
  try {
    yield put(actions.fetchRequest(name))

    const channel = yield call(Taringa.channel.about, name)

    yield put(actions.fetchSuccess(name, channel))
  } catch (e) {
    yield put(actions.fetchFailure(name, e.message))
  }
}

const getList = state => state.channels

export function* fetchList({ url }) {
  const { after, status } = yield select(getList)

  if (status === 'fetching') {
    return
  }

  const params = { after: after }

  try {
    yield put(actions.fetchListRequest())

    const channels = yield call(Taringa.url, url, params)

    yield put(actions.fetchListSuccess(channels))
  } catch (e) {
    yield put(actions.fetchListFailure(e.message))
  }
}
