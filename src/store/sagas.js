import { all, takeLatest, takeEvery } from 'redux-saga/effects'

import { LOAD, LOAD_TAIL, CLEAR_TAIL } from '../summaries/types'
import { loadFeed, loadFeedTail, clearFeedTail } from '../summaries/sagas'

import { LOAD as LOAD_STORY } from '../stories/types'
import { loadStory } from '../stories/sagas'

import { FETCH_TRIGGER } from '../comments/types'
import { loadComments } from '../comments/sagas'

import { SEARCH_TRIGGER } from '../search/types'
import { search } from '../search/sagas'

import { FETCH_TRIGGER as FETCH_USER_TRIGGER } from '../users/types'
import { fetch as fetchUser } from '../users/sagas'

import { FETCH_TRIGGER as FETCH_CHANNEL_TRIGGER } from '../channels/types'
import { fetch as fetchChannel } from '../channels/sagas'

export default function* rootSaga() {
  yield all([
    takeEvery(CLEAR_TAIL, clearFeedTail),
    takeLatest(LOAD, loadFeed),
    takeLatest(LOAD_TAIL, loadFeedTail),
    takeLatest(LOAD_STORY, loadStory),
    takeLatest(FETCH_TRIGGER, loadComments),
    takeLatest(SEARCH_TRIGGER, search),
    takeLatest(FETCH_USER_TRIGGER, fetchUser),
    takeLatest(FETCH_CHANNEL_TRIGGER, fetchChannel),
  ])
}
