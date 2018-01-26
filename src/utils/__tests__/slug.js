import { slugToId } from '../slug'

describe('#slugToId', () => {
  it('returns id', () => {
    expect(slugToId('clon_z6be5')).toEqual('z6be5')
    expect(slugToId('image_z6euy')).toEqual('z6euy')
    expect(slugToId('_z6euy')).toEqual('z6euy')
  })

  it('returns null if no id', () => {
    expect(slugToId('clon_')).toBeNull()
  })

  it('returns null if empty', () => {
    expect(slugToId()).toBeNull()
  })

  it('return null if no string', () => {
    expect(slugToId(null)).toBeNull()
    expect(slugToId('')).toBeNull()
    expect(slugToId(1)).toBeNull()
    expect(slugToId([1, 2, 3])).toBeNull()
    expect(slugToId({})).toBeNull()
    expect(slugToId(1.2)).toBeNull()
  })
})
