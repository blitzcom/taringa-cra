import configure from '../'
import axios from 'axios'

describe('Store', () => {
  it('return initial state', () => {
    const store = configure()

    expect(store.getState()).toEqual({
      channels: {
        after: null,
        before: null,
        count: 0,
        error: '',
        ids: [],
        status: 'success',
        totalCount: 0,
      },
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
      filters: {},
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
