import configure from '../'
import axios from 'axios'

describe('Store', () => {
  it('return initial state', () => {
    const store = configure()

    expect(store.getState()).toEqual({
      control: {
        commentsFetch: {},
        storiesFetch: {},
        searchFetch: {
          q: '',
          status: 'success',
        },
        usersFetch: {},
        channelsFetch: {},
      },
      search: {
        channels: {
          error: '',
          q: '',
          status: 'success',
        },
        stories: {
          error: '',
          q: '',
          status: 'success',
        },
        users: {
          error: '',
          q: '',
          status: 'success',
        },
      },
      entities: {
        comments: {},
        stories: {},
        summaries: {},
        users: {},
        channels: {},
      },
      feed: {},
      flash: {},
      settings: {
        itemSize: 'settings/ITEM_MEDIUM',
      },
    })
  })
})
