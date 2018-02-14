import _ from 'lodash'
import { normalize } from 'normalizr'
import { call, put, select } from 'redux-saga/effects'

import Taringa from '../api'
import * as actions from './actions'
import { story as storySchema } from './schemas'

export const getStory = (state, id) => state.entities.stories[id]

export function* loadStory({ id }) {
  const entitie = yield select(getStory, id)

  if (entitie && entitie.status === 'fetching') {
    return
  }

  try {
    yield put(actions.fetchRequest(id))

    const story = yield call(Taringa.story.byId, id)

    const action = _.assign(
      {},
      normalize(story, storySchema),
      actions.fetchSuccess(id)
    )

    yield put(action)
  } catch (e) {
    yield put(actions.fetchFailure(id, e.message))
  }
}
