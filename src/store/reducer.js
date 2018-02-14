import { combineReducers } from 'redux'

import { summariesEntities, summariesFetchControl } from '../summaries/reducers'
import { storiesEntities, storiesFetchControl } from '../stories/reducers'
import { commentsEntities, commentsFetchControl } from '../comments/reducers'
import { itemSize } from '../settings/reducers'
import { flash } from '../flash/reducers'
import { usersEntities } from '../users/reducers'

const entities = combineReducers({
  comments: commentsEntities,
  stories: storiesEntities,
  summaries: summariesEntities,
  users: usersEntities,
})

const control = combineReducers({
  commentsFetch: commentsFetchControl,
  storiesFetch: storiesFetchControl,
})

const settings = combineReducers({
  itemSize,
})

export default combineReducers({
  control,
  entities,
  feed: summariesFetchControl,
  flash,
  settings,
})
