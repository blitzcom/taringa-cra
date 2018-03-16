import _ from 'lodash'
import { call, put, select } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'
import { normalizeComments } from './schemas'

export const getCommentsControl = (state, id) => state.control.commentsFetch[id]

export function* loadComments({ id, strategy }) {
  const control = yield select(getCommentsControl, id)

  let params = {}

  if (control && control.after) {
    params = _.assign({}, params, { after: control.after })
  }

  try {
    yield put(actions.fetchRequest(id))

    const result = yield call(Taringa.story.comments, id, params)

    const action = _.assign(
      {},
      normalizeComments(result, id),
      actions.fetchSuccess(id, strategy)
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}
