import configure from '../'
import axios from 'axios'

describe('Store', () => {
  it('return initial state', () => {
    const store = configure()

    expect(store.getState()).toEqual({
      control: {
        summariesFetch: {
          after: null,
          before: null,
          error: '',
          ids: [],
          status: 'success',
          totalCount: 0,
        }
      },
      entities: {
        summaries: {}
      }
    })
  })
})
