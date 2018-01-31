import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../types'
import * as actions from '../actions'

  const middlewares = [thunk.withExtraArgument(axios)]
  const mockStore = configureMockStore(middlewares)
  const mock = new MockAdapter(axios)

describe('Stories actions', () => {
  it('creates an action to start fetching a story', () => {
    expect(actions.fetchRequest(1)).toEqual({
      type: types.FETCH_REQUEST,
      id: 1,
    })
  })

  it('creates an action to stop fetching a story with success', () => {
    expect(actions.fetchSuccess(1)).toEqual({
      type: types.FETCH_SUCCESS,
      id: 1,
    })
  })

  it('creates an action to stop fetching a story with failure', () => {
    expect(actions.fetchFailure(1, 'foobar')).toEqual({
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'foobar',
    })
  })
})

describe('Fetch stories async action', () => {
  const data = {
    id: 'z6bk5',
    title: 'Amnesia Collection',
  }

  afterEach(() => mock.reset())

  it('fetches with success', () => {
    mock.onGet('story/z6bk5')
      .reply(200, data)

    const entities = {
      stories: {
        'z6bk5' : { id: 'z6bk5', title: 'Amnesia Collection' }
      }
    }

    const store = mockStore({
      control: {
        storiesFetch: {}
      }
    })

    return store.dispatch(actions.fetch('z6bk5')).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST, id: 'z6bk5' },
        { type: types.FETCH_SUCCESS, id: 'z6bk5', result: 'z6bk5', entities },
      ])
    })
  })

  it('fetches with failure', () => {
    mock.onGet('story/z6bk5')
      .networkError()

    const store = mockStore({
      control: {
        storiesFetch: {}
      }
    })

    return store.dispatch(actions.fetch('z6bk5')).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST, id: 'z6bk5' },
        { type: types.FETCH_FAILURE, id: 'z6bk5', message: 'Network Error' },
      ])
    })
  })

  it('skips if already fetching a certain story', () => {
    mock.onGet('story/z6bk5')
      .reply(200, data)

    const store = mockStore({
      control: {
        storiesFetch: {
          'z6bk5': { error: '', status: 'fetching' }
        }
      }
    })

    return store.dispatch(actions.fetch('z6bk5')).then(() => {
      expect(store.getActions()).toEqual([])
    })
  })
})

describe('Fetch story and comments async action', () => {
  const story = {
    id: 'z6bk5',
    title: 'Amnesia Collection',
  }

  const comments = [
    { id: 1, foo: 'foo' },
    { id: 2, foo: 'foo' }
  ]

  afterEach(() => mock.reset())

  it('fetches with success', () => {
    const response = {
      after: 2,
      before: 1,
      count: 2,
      items: comments,
      totalCount: 2,
    }

    mock.onGet('story/z6bk5').reply(200, story)
        .onGet('/story/z6bk5/comments').reply(200, response)

    const store = mockStore({
      control:{
        storiesFetch: {},
        commentsFetch: {}
      }
    })

    const entities = {
      stories: {
        'z6bk5' : { id: 'z6bk5', title: 'Amnesia Collection' }
      }
    }

    const commentsEntities = {
      comments: {
        1: { id: 1, foo: 'foo' },
        2: { id: 2, foo: 'foo' }
      }
    }

    return store.dispatch(actions.fetchWithComments('z6bk5')).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST, id: 'z6bk5' },
        { type: types.FETCH_SUCCESS, id: 'z6bk5', result: 'z6bk5', entities },
        { type: 'comments/FETCH_REQUEST', id: 'z6bk5' },
        {
          type: 'comments/FETCH_SUCCESS',
          id: 'z6bk5',
          after: 2,
          before: 1,
          count: 2,
          entities: commentsEntities,
          result: [1, 2],
          totalCount: 2
        },
      ])
    })
  })

  it('fetches with failure', () => {
    mock.onGet('story/z6bk5').networkError()

    const store = mockStore({
      control:{
        storiesFetch: {

        },
        commentsFetch: {}
      }
    })

    return store.dispatch(actions.fetchWithComments('z6bk5')).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST, id: 'z6bk5' },
        { type: types.FETCH_FAILURE, id: 'z6bk5', message: 'Network Error' },
      ])
    })
  })

  it('skips if already fetching', () => {
    const store = mockStore({
      control:{
        storiesFetch: {
          'z6bk5': { error: '', status: 'fetching' }
        },
        commentsFetch: {}
      }
    })

    return store.dispatch(actions.fetchWithComments('z6bk5')).then(() => {
      expect(store.getActions()).toEqual([])
    })
  })
})
