import { CHANGE_ITEM_SIZE } from './constants'

export const changeItemSize = size => ({
  type: CHANGE_ITEM_SIZE,
  size: size,
})
