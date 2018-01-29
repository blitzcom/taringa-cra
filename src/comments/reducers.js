import _ from 'lodash'
import * as types from './types'

export const commentsEntities = (state = {}, action) => {
  if (
    action.entities &&
    (action.entities.comments || action.entities.replies)
  ) {
    return _.merge({}, state, action.entities.comments, action.entities.replies)
  }

  return state
}

const commentFetchControl = (
  state = { error: '', ids: [], status: 'success' },
  action
) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { error: '', status: 'fetching' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, {
        after: action.after,
        before: action.before,
        count: action.count,
        ids: _.union(state.ids, action.result),
        status: 'success',
        totalCount: action.totalCount,
      })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { error: action.message, status: 'failure' })
    default:
      return state
  }
}
export const commentsFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state, {
        [action.id]: commentFetchControl(state[action.id], action),
      })
    case types.CREATE_FETCH_CONTROL:
      return _.assign({}, state, {
        [action.id]: commentFetchControl(undefined, {}),
      })
    default:
      return state
  }
}
