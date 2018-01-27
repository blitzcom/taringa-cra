import { combineReducers } from 'redux'

import { summariesEntities, summariesFetchControl } from '../summaries/reducers'
import { storiesEntities, storiesFetchControl } from '../stories/reducers'
import {
  storiesCommentsEntities,
  storiesCommentsFetchControl,
} from '../stories-comments/reducers'

const entities = combineReducers({
  stories: storiesEntities,
  storiesComments: storiesCommentsEntities,
  summaries: summariesEntities,
})

const control = combineReducers({
  storiesCommentsFetch: storiesCommentsFetchControl,
  storiesFetch: storiesFetchControl,
  summariesFetch: summariesFetchControl,
})

export default combineReducers({
  control,
  entities,
})
