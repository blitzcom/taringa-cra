import configure from '../'
import axios from 'axios'

describe('Store', () => {
  it('return initial state', () => {
    const store = configure()

    expect(store.getState()).toEqual({
      control: {
        storiesFetch: {
          error: '',
          ids: [],
          status: 'success',
        }
      },
      entities: {
        stories: {}
      }
    })
  })
})
