import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../types'
import * as actions from '../actions'

const middlewares = [thunk.withExtraArgument(axios)]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios)

describe('Summaries actions', () => {
  it('creates an action to start fetching summaries', () => {
    expect(actions.fetchRequest(1)).toEqual({
      type: types.FETCH_REQUEST,
      id: 1
    })
  })

  it('creates an action to finish fetching summaries with success', () => {
    expect(actions.fetchSuccess(1)).toEqual({
      type: types.FETCH_SUCCESS,
      id: 1
    })
  })

  it('creates an action to finish fetching summaries with failure', () => {
    expect(actions.fetchFailure(1, 'Network Error')).toEqual({
      type: types.FETCH_FAILURE,
      message: 'Network Error',
      id: 1
    })
  })
})

describe('Fetch summaries async action', () => {
  const data = [
    { id: 1, foo: 'foo'},
    { id: 2, foo: 'foo'},
  ]

  afterEach(() => mock.reset())

  it('fetches with success', () => {
    mock.onGet('/feed')
      .reply(200, { items: data })

    const store = mockStore({
      feed: {
        1: {
          error: '',
          ids: [],
          status: 'success',
        }
      }
    })

    const entities = {
      summaries: {
        1: { id: 1, foo: 'foo'},
        2: { id: 2, foo: 'foo'},
      }
    }

    return store.dispatch(actions.fetch(1, '/feed')).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST, id: 1 },
        { type: types.FETCH_SUCCESS, id: 1, result: [1, 2], entities: entities },
      ])
    })
  })

  it('fetches with failure', () => {
    mock.onGet('/feed')
      .networkError()

    const store = mockStore({
      feed: {
        1: {
          error: '',
          ids: [],
          status: 'success',
        }
      }
    })

    return store.dispatch(actions.fetch(1, '/feed')).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST, id: 1 },
        { type: types.FETCH_FAILURE, id: 1, message: 'Network Error' },
      ])
    })
  })

  it('skips if already fetching', () => {
    mock.onGet('/feed')
      .reply(200, { items: data })

    const store = mockStore({
      feed: {
        1: {
          error: '',
          ids: [],
          status: 'fetching',
        }
      }
    })

    return store.dispatch(actions.fetch(1, '/feed')).then(() => {
      expect(store.getActions()).toEqual([])
    })
  })

  it('skips if keepLoading is false', () => {
    mock.onGet('/feed')
      .reply(200, { items: data })

    const store = mockStore({
      feed: {
        1: {
          error: '',
          ids: [1, 2, 3, 4],
          status: 'success',
        }
      }
    })

    return store.dispatch(actions.fetch(1, '/feed', false)).then(() => {
      expect(store.getActions()).toEqual([])
    })
  })
})
