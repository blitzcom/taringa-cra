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
        items: [],
        status: 'success',
        totalCount: 0,
      },
      control: {
        channelsFetch: {},
        commentsFetch: {},
        repliesFetch: {},
        storiesFetch: {},
        usersFetch: {},
      },
      filters: {},
      searching: {},
      entities: {
        channels: {},
        commentAttachment: {},
        comments: {},
        stories: {},
        summaries: {},
        users: {},
      },
      feed: {},
      flash: {},
      settings: {
        itemSize: 'settings/ITEM_MEDIUM',
      },
    })
  })
})
