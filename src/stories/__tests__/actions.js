import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../types'
import * as actions from '../actions'

describe('Summaries actions', () => {
  it('creates an action to start fetching summaries', () => {
    expect(actions.fetchRequest()).toEqual({
      type: types.FETCH_REQUEST,
    })
  })

  it('creates an action to finish fetching summaries with success', () => {
    expect(actions.fetchSuccess()).toEqual({
      type: types.FETCH_SUCCESS,
    })
  })

  it('creates an action to finish fetching summaries with failure', () => {
    expect(actions.fetchFailure('Network Error')).toEqual({
      type: types.FETCH_FAILURE,
      message: 'Network Error',
    })
  })
})

describe('Fetch summaries async action', () => {
  const data = [
    { id: 1, foo: 'foo'},
    { id: 2, foo: 'foo'},
  ]

  const middlewares = [thunk.withExtraArgument(axios)]
  const mockStore = configureMockStore(middlewares)
  const mock = new MockAdapter(axios)

  afterEach(() => mock.reset())

  it('fetches with success', () => {
    mock.onGet('/feed/global')
      .reply(200, { items: data })

    const store = mockStore({
      control: {
        summariesFetch: {
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

    return store.dispatch(actions.fetch()).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST },
        { type: types.FETCH_SUCCESS, result: [1, 2], entities: entities },
      ])
    })
  })

  it('fetches with failure', () => {
    mock.onGet('/feed/global')
      .networkError()

    const store = mockStore({
      control: {
        summariesFetch: {
          error: '',
          ids: [],
          status: 'success',
        }
      }
    })

    return store.dispatch(actions.fetch()).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST },
        { type: types.FETCH_FAILURE, message: 'Network Error' },
      ])
    })
  })

  it('skips if already fetching', () => {
    mock.onGet('/feed/global')
      .reply(200, { items: data })

    const store = mockStore({
      control: {
        summariesFetch: {
          error: '',
          ids: [],
          status: 'fetching',
        }
      }
    })

    return store.dispatch(actions.fetch()).then(() => {
      expect(store.getActions()).toEqual([])
    })
  })
})
