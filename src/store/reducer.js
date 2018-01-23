import { combineReducers } from 'redux'

import { storiesEntities, storiesFetchControl } from '../stories/reducers'

const entities = combineReducers({
  stories: storiesEntities,
})

const control = combineReducers({
  storiesFetch: storiesFetchControl,
})

export default combineReducers({
  control,
  entities,
})
