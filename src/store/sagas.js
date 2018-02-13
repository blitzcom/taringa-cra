import { all, takeLatest, takeEvery } from 'redux-saga/effects'

import { LOAD, LOAD_TAIL, CLEAR_TAIL } from '../summaries/types'
import { loadFeed, loadFeedTail, clearFeedTail } from '../summaries/sagas'

export default function* rootSaga() {
  yield all([
    takeEvery(CLEAR_TAIL, clearFeedTail),
    takeLatest(LOAD, loadFeed),
    takeLatest(LOAD_TAIL, loadFeedTail),
  ])
}
