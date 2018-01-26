import { combineReducers } from 'redux'

import { summariesEntities, summariesFetchControl } from '../stories/reducers'

const entities = combineReducers({
  summaries: summariesEntities,
})

const control = combineReducers({
  summariesFetch: summariesFetchControl,
})

export default combineReducers({
  control,
  entities,
})
