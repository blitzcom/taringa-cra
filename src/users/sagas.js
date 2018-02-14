import { call, put } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'

export function* fetch({ username }) {
  try {
    yield put(actions.fetchRequest(username))

    const user = yield call(Taringa.user.about, username)

    yield put(actions.fetchSuccess(username, user))
  } catch (e) {
    yield put(actions.fetchFailure(username, e.message))
  }
}
