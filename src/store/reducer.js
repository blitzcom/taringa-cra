import { combineReducers } from 'redux'

import { summariesEntities, summariesFetchControl } from '../summaries/reducers'
import { storiesEntities, storiesFetchControl } from '../stories/reducers'
import { commentsEntities, commentsFetchControl } from '../comments/reducers'

const entities = combineReducers({
  comments: commentsEntities,
  stories: storiesEntities,
  summaries: summariesEntities,
})

const control = combineReducers({
  commentsFetch: commentsFetchControl,
  storiesFetch: storiesFetchControl,
  summariesFetch: summariesFetchControl,
})

export default combineReducers({
  control,
  entities,
})
