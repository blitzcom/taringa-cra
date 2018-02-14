import configure from '../'
import axios from 'axios'

describe('Store', () => {
  it('return initial state', () => {
    const store = configure()

    expect(store.getState()).toEqual({
      control: {
        commentsFetch: {},
        storiesFetch: {},
      },
      entities: {
        comments: {},
        stories: {},
        summaries: {},
        users: {},
      },
      feed: {},
      flash: {},
      settings: {
        itemSize: 'settings/ITEM_MEDIUM'
      }
    })
  })
})
