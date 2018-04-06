import _ from 'lodash'
import { call, put, select } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'
import { normalizeComments } from './schemas'

export const getCommentsControl = (state, id) =>
  state.control.commentsFetch[id] || {}

export function* loadComments({ id }) {
  const control = yield select(getCommentsControl, id)

  const params = { after: control.after }

  try {
    yield put(actions.fetchRequest(id))

    const result = yield call(Taringa.story.comments, id, params)

    const action = _.assign(
      {},
      normalizeComments(result, id),
      actions.fetchSuccess(id)
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}

export const getRepliesControl = (state, id) =>
  state.control.repliesFetch[id] || {}

export function* fetchReplies({ id }) {
  const control = yield select(getRepliesControl, id)

  const params = { after: control.after }

  try {
    yield put(actions.fetchRepliesRequest(id))

    const result = yield call(Taringa.comment.byId, id, params)

    yield put(actions.fetchRepliesSuccess(id, result))
  } catch (e) {
    yield put(actions.fetchRepliesFailure(id, e.message))
  }
}
