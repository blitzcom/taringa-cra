import { combineReducers } from 'redux'

import { summariesEntities, summariesFetchControl } from '../summaries/reducers'

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
