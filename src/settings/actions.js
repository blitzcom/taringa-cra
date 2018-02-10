import { CHANGE_ITEM_SIZE, ITEM_MEDIUM } from './constants'

export const changeItemSize = size => ({
  type: CHANGE_ITEM_SIZE,
  size: size,
  storage: {
    key: 'type',
    value: 'size',
  },
})

export const restoreItemSize = store => {
  if (localStorage) {
    const size = localStorage.getItem(CHANGE_ITEM_SIZE) || ITEM_MEDIUM
    store.dispatch(changeItemSize(size))
  }
}
