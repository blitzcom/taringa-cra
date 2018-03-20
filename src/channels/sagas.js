import _ from 'lodash'
import { call, put, select } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'
import { PUSH } from '../constants'

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

export function* fetchList({ url, strategy }) {
  const { after, status } = yield select(getList)

  if (status === 'fetching') {
    return
  }

  let params = {}

  if (strategy === PUSH) {
    params = _.assign({}, params, { after: after })
  }

  try {
    yield put(actions.fetchListRequest(strategy))

    const channels = yield call(Taringa.url, url, params)

    yield put(actions.fetchListSuccess(channels, strategy))
  } catch (e) {
    yield put(actions.fetchListFailure(e.message))
  }
}
