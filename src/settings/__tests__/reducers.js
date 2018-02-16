import { itemSize } from '../reducers'
import { ITEM_BIG, ITEM_MEDIUM, CHANGE_ITEM_SIZE } from '../constants'

describe('Item size reducer', () => {
  it('exists', () => {
    expect(itemSize).toBeDefined()
  })

  it('returns initial state', () => {
    expect(itemSize(undefined, {})).toEqual(ITEM_MEDIUM)
  })

  it('handles CHANGE_ITEM_SIZE', () => {
    const action = {
      type: CHANGE_ITEM_SIZE,
      size: ITEM_BIG,
    }

    expect(itemSize(undefined, action)).toEqual(ITEM_BIG)
  })
})
