import { pluralize, humanize } from '../Number'

describe('#pluralize', () => {
  it('exists', () => {
    expect(pluralize).toBeDefined()
  })

  it('returns singular', () => {
    expect(pluralize.call(1, 'comentario')).toBe('1 comentario')
  })

  it('returns plural', () => {
    expect(pluralize.call(2, 'comentario')).toBe('2 comentarios')
  })

  it('returns plural for zero', () => {
    expect(pluralize.call(0, 'comentario')).toBe('0 comentarios')
  })

  it('returns plural with given value', () => {
    expect(pluralize.call(2, 'comentario', 'nuevos comentarios')).toBe(
      '2 nuevos comentarios'
    )
  })

  describe('Word only', () => {
    it('returns singular', () => {
      expect(pluralize.call(1, 'comentario', null, true)).toBe('comentario')
    })

    it('returns plural', () => {
      expect(pluralize.call(2, 'comentario', null, true)).toBe('comentarios')
    })
  })
})

describe('#humanize', () => {
  it('exists', () => {
    expect(humanize).toBeDefined()
  })

  it('returns hundreds', () => {
    expect(humanize.call(999)).toEqual('999')
    expect(humanize.call(1)).toEqual('1')
  })

  it('returns thousands', () => {
    expect(humanize.call(1000)).toEqual('1k')
    expect(humanize.call(10000)).toEqual('10k')
    expect(humanize.call(100000)).toEqual('100k')
    expect(humanize.call(999999)).toEqual('1m')
  })

  it('returns millions', () => {
    expect(humanize.call(2000000)).toEqual('2m')
  })

  it('returns billions', () => {
    expect(humanize.call(2000000000)).toEqual('2b')
  })

  it('returns two decimals', () => {
    expect(humanize.call(1499)).toEqual('1.5k')
  })

  it('returns more decimals', () => {
    expect(humanize.call(1499, 3)).toEqual('1.499k')
  })

  it('handles negative numbers', () => {
    expect(humanize.call(-1499)).toEqual('-1.5k')
  })
})
