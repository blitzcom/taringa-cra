import { ITEM_BIG, CHANGE_ITEM_SIZE } from '../constants'
import { changeItemSize } from '../actions'

describe('Item size action', () => {
  it('creates an action to change item size', () => {
    expect(changeItemSize(ITEM_BIG)).toEqual({
      type: CHANGE_ITEM_SIZE,
      size: ITEM_BIG,
      storage: {
        key: 'type',
        value: 'size'
      }
    })
  })
})
