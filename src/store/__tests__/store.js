import configure from '../'
import axios from 'axios'

describe('Store', () => {
  it('return initial state', () => {
    const store = configure()

    expect(store.getState()).toEqual({
      control: {
        commentsFetch: {},
        storiesFetch: {},
        summariesFetch: {},
      },
      entities: {
        comments: {},
        stories: {},
        summaries: {},
      },
      settings: {
        itemSize: 'settings/ITEM_MEDIUM'
      }
    })
  })
})
