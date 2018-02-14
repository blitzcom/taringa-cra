import _ from 'lodash'
import { normalize } from 'normalizr'
import { call, put } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'
import { comment as commentSchema } from './schemas'

export function* loadComments(id) {
  try {
    yield put(actions.fetchRequest(id))

    const { items, ...rest } = yield call(Taringa.story.comments, id)

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
