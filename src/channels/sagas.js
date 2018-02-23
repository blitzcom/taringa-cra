import { call, put } from 'redux-saga/effects'

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
