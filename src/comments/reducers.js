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

const initialState = {
  error: '',
  items: [],
  status: 'success',
  totalCount: 0,
}

const commentFetchControl = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { error: '', status: 'fetching' })
    case types.FETCH_SUCCESS:
      const root = action.entities.commentRoot[action.result]
      return _.assign({}, state, root, {
        status: 'success',
        items: _.union(state.items, root.items),
      })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { error: action.message, status: 'failure' })
    case types.CLEAR:
      return initialState
    default:
      return state
  }
}

export const commentsFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
    case types.CLEAR:
      return _.assign({}, state, {
        [action.id]: commentFetchControl(state[action.id], action),
      })
    default:
      return state
  }
}

const replyFetchControl = (state, action) => {
  switch (action.type) {
    case types.FETCH_REPLIES_REQUEST:
      return _.assign({}, state, { error: '', status: 'fetching' })
    case types.FETCH_REPLIES_SUCCESS:
      const result = action.result || action.id
      const replyRoot = action.entities.replyRoots[result]

      return _.assign({}, state, replyRoot, {
        status: 'success',
        items: _.union(state.items, replyRoot.items),
      })
    case types.FETCH_REPLIES_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}

export const repliesFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REPLIES_REQUEST:
    case types.FETCH_REPLIES_SUCCESS:
    case types.FETCH_REPLIES_FAILURE:
      return _.assign({}, state, {
        [action.id]: replyFetchControl(state[action.id], action),
      })
    case types.FETCH_SUCCESS:
      if (action.entities && action.entities.replyRoots) {
        return _.merge({}, state, action.entities.replyRoots)
      }

      return state
    default:
      return state
  }
}
