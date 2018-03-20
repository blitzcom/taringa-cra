import { all, takeLatest } from 'redux-saga/effects'

import { LOAD } from '../summaries/types'
import { loadFeed } from '../summaries/sagas'

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

import { FETCH_LIST_TAIL_TRIGGER, FETCH_LIST_TRIGGER } from '../channels/types'
import { fetchList, fetchListTail } from '../channels/sagas'

export default function* rootSaga() {
  yield all([
    takeLatest(LOAD, loadFeed),
    takeLatest(LOAD_STORY, loadStory),
    takeLatest(FETCH_TRIGGER, loadComments),
    takeLatest(SEARCH_TRIGGER, search),
    takeLatest(FETCH_USER_TRIGGER, fetchUser),
    takeLatest(FETCH_CHANNEL_TRIGGER, fetchChannel),
    takeLatest(FETCH_LIST_TRIGGER, fetchList),
    takeLatest(FETCH_LIST_TAIL_TRIGGER, fetchListTail),
  ])
}
