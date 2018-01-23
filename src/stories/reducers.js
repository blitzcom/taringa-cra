import _ from 'lodash'
import * as types from './types'

export const storiesEntities = (state = {}, action) => {
  if (action.entities && action.entities.stories) {
    return _.merge({}, state, action.entities.stories)
  }

  return state
}

const fetchControlInitialState = {
  error: '',
  ids: [],
  status: 'success',
}

export const storiesFetchControl = (
  state = fetchControlInitialState,
  action
) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success', ids: action.result })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}
