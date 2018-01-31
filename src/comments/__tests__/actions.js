import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../types'
import * as actions from '../actions'

const middlewares = [thunk.withExtraArgument(axios)]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios)

describe('Comments actions', () => {
  it('creates an action to start fetching comments', () => {
    expect(actions.fetchRequest(1)).toEqual({
      type: types.FETCH_REQUEST,
      id: 1,
    })
  })

  it('creates an action to stop fetching comments with success', () => {
    expect(actions.fetchSuccess(1)).toEqual({
      type: types.FETCH_SUCCESS,
      id: 1
    })
  })

  it('creates an action to stop fetching comments with failure', () => {
    expect(actions.fetchFailure(1, 'Network Error')).toEqual({
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'Network Error'
    })
  })
})

describe('Fetch comments async action', () => {
  const data = [
    { id: 1, foo: 'foo' },
    { id: 2, foo: 'foo' }
  ]

  afterEach(() => mock.reset())

  it('fetches with success', () => {
    const response = {
      after: 2,
      before: 1,
      count: 2,
      items: data,
      totalCount: 2,
    }

    mock.onGet('/story/1/comments')
      .reply(200, response)

    const store = mockStore({
      control: {
        commentsFetch: {}
      }
    })

    const entities = {
      comments: {
        1: { id: 1, foo: 'foo' },
        2: { id: 2, foo: 'foo' }
      }
    }

    return store.dispatch(actions.fetch(1)).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST, id: 1 },
        {
          type: types.FETCH_SUCCESS,
          id: 1,
          result: [1, 2],
          before: 1,
          after: 2,
          count: 2,
          totalCount: 2,
          entities: entities
        }
      ])
    })
  })

  it('fetches with failure', () => {
    mock.onGet('/story/1/comments')
      .networkError()

    const store = mockStore({
      control: {
        commentsFetch: {}
      }
    })

    return store.dispatch(actions.fetch(1)).then(() => {
      expect(store.getActions()).toEqual([
        { type: types.FETCH_REQUEST, id: 1 },
        { type: types.FETCH_FAILURE, id: 1, message: 'Network Error' }
      ])
    })
  })

  it('skips if alreay fetching', () => {
    const response = {
      after: 2,
      before: 1,
      count: 2,
      items: data,
      totalCount: 2,
    }

    mock.onGet('/story/1/comments')
      .reply(200, response)

    const store = mockStore({
      control: {
        commentsFetch: {
          1: { error: '', ids: [], status: 'fetching' }
        }
      }
    })

    return store.dispatch(actions.fetch(1)).then(() => {
      expect(store.getActions()).toEqual([])
    })
  })
})
