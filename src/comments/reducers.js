import _ from 'lodash'

import * as types from './types'
import { PUSH } from '../constants'

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
  state = { error: '', items: [], status: 'success', totalCount: 0 },
  action
) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { error: '', status: 'fetching' })
    case types.FETCH_SUCCESS:
      if (action.entities && action.entities.commentRoot) {
        if (action.strategy === PUSH) {
          const root = action.entities.commentRoot[action.result]

          return _.assign({}, state, root, {
            status: 'success',
            items: _.union(state.items, root.items),
          })
        }

        return _.assign({}, state, action.entities.commentRoot[action.result], {
          status: 'success',
        })
      }

      return _.assign({}, state, {
        status: 'success',
        items: action.result,
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
    default:
      return state
  }
}

export const repliesFetchControl = (state = {}, action) => {
  if (action.entities && action.entities.replyRoots) {
    return _.merge({}, state, action.entities.replyRoots)
  }

  return state
}
