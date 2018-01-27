import _ from 'lodash'
import * as types from './types'

export const storiesEntities = (state = {}, action) => {
  if (action.entities && action.entities.stories) {
    return _.merge({}, state, action.entities.stories)
  }

  return state
}

const storyFetchControl = (
  state = { error: '', status: 'success' },
  action
) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { error: '', status: 'fetching' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success' })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { error: action.message, status: 'failure' })
    default:
      return state
  }
}

export const storiesFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state, {
        [action.id]: storyFetchControl(state[action.id], action),
      })
    case types.CREATE_FETCH_CONTROL:
      return _.assign({}, state, {
        [action.id]: storyFetchControl(undefined, {}),
      })
    default:
      return state
  }
}
