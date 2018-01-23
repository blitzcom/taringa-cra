import { humanizeNum } from '../Utils'

describe('Humanize numbers', () => {
  it('returns hundreds', () => {
    expect(humanizeNum(999)).toEqual('999')
    expect(humanizeNum(1)).toEqual('1')
  })

  it('returns thousands', () => {
    expect(humanizeNum(1000)).toEqual('1k')
    expect(humanizeNum(10000)).toEqual('10k')
    expect(humanizeNum(100000)).toEqual('100k')
    expect(humanizeNum(999999)).toEqual('1m')
  })

  it('returns millions', () => {
    expect(humanizeNum(2000000)).toEqual('2m')
  })

  it('returns billions', () => {
    expect(humanizeNum(2000000000)).toEqual('2b')
  })

  it('returns two decimals', () => {
    expect(humanizeNum(1499)).toEqual('1.5k')
  })

  it('returns more decimals', () => {
    expect(humanizeNum(1499, 3)).toEqual('1.499k')
  })

  it('handles negative numbers', () => {
    expect(humanizeNum(-1499)).toEqual('-1.5k')
  })
})
