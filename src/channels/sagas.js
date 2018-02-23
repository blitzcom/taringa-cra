import { call, put } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'

export function* fetch({ id }) {
  try {
    yield put(actions.fetchRequest(id))

    const channel = yield call(Taringa.channel.about, id)

    yield put(actions.fetchSuccess(id, channel))
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}
