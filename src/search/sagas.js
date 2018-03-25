import axios from 'axios'
import { call, put, race, take, select } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'
import { SEARCH_CANCEL } from './types'

export const searchEndPoints = {
  channels: Taringa.search.channel,
  stories: Taringa.search.story,
  users: Taringa.search.user,
}

export const getState = (state, id) => state.searching[id] || {}

export function* searching({ id, q }) {
  const cancelToken = yield call(axios.CancelToken.source)

  const state = yield select(getState, id)

  const params = { after: state.after }
  const keywork = q || state.q

  try {
    yield put(actions.searchRequest(id, keywork))

    const { cancel, result } = yield race({
      cancel: take(SEARCH_CANCEL),
      result: call(searchEndPoints[id], keywork, cancelToken.token, params),
    })

    if (cancel && cancelToken) {
      yield call(cancelToken.cancel)
      yield put(actions.searchClear(id))
      return
    }

    yield put(actions.searchSuccess(id, result))
  } catch (e) {
    yield put(actions.searchFailure(id, e.message))
  }
}
