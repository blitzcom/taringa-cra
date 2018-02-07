import { ITEM_MEDIUM, CHANGE_ITEM_SIZE } from './constants'

export const itemSize = (state = ITEM_MEDIUM, action) => {
  switch (action.type) {
    case CHANGE_ITEM_SIZE:
      return action.size
    default:
      return state
  }
}
