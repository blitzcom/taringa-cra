import { all, takeEvery, takeLatest } from 'redux-saga/effects'

import { LOAD } from '../summaries/types'
import { loadFeed } from '../summaries/sagas'

import { LOAD as LOAD_STORY } from '../stories/types'
import { loadStory } from '../stories/sagas'

import { FETCH_REPLIES_TRIGGER, FETCH_TRIGGER } from '../comments/types'
import { fetchReplies, loadComments } from '../comments/sagas'

import { SEARCH_TRIGGER } from '../search/types'
import { searching } from '../search/sagas'

import { FETCH_TRIGGER as FETCH_USER_TRIGGER } from '../users/types'
import { fetch as fetchUser } from '../users/sagas'

import { FETCH_TRIGGER as FETCH_CHANNEL_TRIGGER } from '../channels/types'
import { fetch as fetchChannel } from '../channels/sagas'

import { FETCH_LIST_TRIGGER } from '../channels/types'
import { fetchList } from '../channels/sagas'

export default function* rootSaga() {
  yield all([
    takeEvery(SEARCH_TRIGGER, searching),
    takeLatest(LOAD, loadFeed),
    takeLatest(LOAD_STORY, loadStory),
    takeLatest(FETCH_TRIGGER, loadComments),
    takeLatest(FETCH_USER_TRIGGER, fetchUser),
    takeLatest(FETCH_CHANNEL_TRIGGER, fetchChannel),
    takeLatest(FETCH_LIST_TRIGGER, fetchList),
    takeLatest(FETCH_REPLIES_TRIGGER, fetchReplies),
  ])
}
