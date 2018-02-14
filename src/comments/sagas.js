import _ from 'lodash'
import { normalize } from 'normalizr'
import { call, put, select } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'
import { comment as commentSchema } from './schemas'

export const getCommentsControl = (state, id) => state.control.commentsFetch[id]

export function* loadComments({ id }) {
  const control = yield select(getCommentsControl, id)

  let params = {}

  if (control && control.after) {
    params = _.assign({}, params, { after: control.after })
  }

  try {
    yield put(actions.fetchRequest(id))

    const { items, ...rest } = yield call(Taringa.story.comments, id, params)

    const action = _.assign(
      {},
      normalize(items, [commentSchema]),
      actions.fetchSuccess(id),
      rest
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}
