import { combineReducers } from 'redux'

import { summariesEntities, summariesFetchControl } from '../summaries/reducers'
import { storiesEntities, storiesFetchControl } from '../stories/reducers'

const entities = combineReducers({
  stories: storiesEntities,
  summaries: summariesEntities,
})

const control = combineReducers({
  storiesFetch: storiesFetchControl,
  summariesFetch: summariesFetchControl,
})

export default combineReducers({
  control,
  entities,
})
