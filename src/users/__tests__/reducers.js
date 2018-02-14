import { usersEntities } from '../reducers'

describe('Users entities', () => {
  it('exists', () => {
    expect(usersEntities).toBeDefined()
  })

  it('returns initial state', () => {
    expect(usersEntities(undefined, {})).toEqual({})
  })

  it('merges users', () => {
    const action = {
      type: 'any',
      entities: {
        users: {
          1: { id: 1, foo: 'foo', bar: 'bar' },
          2: { id: 2, foo: 'foo', bar: 'bar' }
        }
      }
    }

    expect(usersEntities(undefined, action)).toEqual({
      1: { id: 1, foo: 'foo', bar: 'bar' },
      2: { id: 2, foo: 'foo', bar: 'bar' }
    })
  })
})
