import { pluralize } from '../StringHelpers'

describe('pluralize', () => {
  it('exists', () => {
    expect(pluralize).toBeDefined()
  })

  it('returns singular', () => {
    expect(pluralize(1, 'comentario')).toBe('1 comentario')
  })

  it('returns plural', () => {
    expect(pluralize(2, 'comentario')).toBe('2 comentarios')
  })

  it('returns plural for zero', () => {
    expect(pluralize(0, 'comentario')).toBe('0 comentarios')
  })

  it('returns plural with given value', () => {
    expect(pluralize(2, 'comentario', 'nuevos comentarios')).toBe(
      '2 nuevos comentarios'
    )
  })
})
