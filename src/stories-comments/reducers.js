import _ from 'lodash'
import * as types from './types'

export const storiesCommentsEntities = (state = {}, action) => {
  if (action.entities && action.entities.comments) {
    return _.merge({}, state, action.entities.comments)
  }

  return state
}

const storyCommentsFetchControl = (
  state = { error: '', ids: [], status: 'success' },
  action
) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { error: '', ids: [], status: 'fetching' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { ids: action.result, status: 'success' })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { error: action.message, status: 'failure' })
    default:
      return state
  }
}

export const storiesCommentsFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state, {
        [action.id]: storyCommentsFetchControl(state[action.id], action),
      })
    case types.CREATE_FETCH_CONTROl:
      return _.assign({}, state, {
        [action.id]: storyCommentsFetchControl(state[action.id], action),
      })
    default:
      return state
  }
}
