import { combineReducers } from 'redux'

import { summariesEntities, summariesFetchControl } from '../summaries/reducers'
import { storiesEntities, storiesFetchControl } from '../stories/reducers'
import {
  commentsEntities,
  commentsFetchControl,
  repliesFetchControl,
} from '../comments/reducers'
import { itemSize } from '../settings/reducers'
import { flash } from '../flash/reducers'
import { usersEntities, usersFetchControl } from '../users/reducers'
import { searching } from '../search/reducers'
import {
  channelEntities,
  channelsFetchControl,
  channelListFetch,
} from '../channels/reducers'
import { filters } from '../filters/reducers'

const entities = combineReducers({
  channels: channelEntities,
  comments: commentsEntities,
  stories: storiesEntities,
  summaries: summariesEntities,
  users: usersEntities,
})

const control = combineReducers({
  channelsFetch: channelsFetchControl,
  commentsFetch: commentsFetchControl,
  repliesFetch: repliesFetchControl,
  storiesFetch: storiesFetchControl,
  usersFetch: usersFetchControl,
})

const settings = combineReducers({
  itemSize,
})

export default combineReducers({
  channels: channelListFetch,
  control,
  entities,
  feed: summariesFetchControl,
  filters: filters,
  flash,
  searching,
  settings,
})
