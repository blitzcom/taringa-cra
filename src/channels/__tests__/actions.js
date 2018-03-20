import * as types from '../types'
import * as actions from '../actions'

describe('Channel actions', () => {
  describe('Fetch channel', () => {
    it('creates an action to trigger', () => {
      expect(actions.fetchTrigger('foo')).toEqual({
        type: types.FETCH_TRIGGER,
        name: 'foo',
      })
    })

    it('creates an action to start a fetch request', () => {
      expect(actions.fetchRequest('foo')).toEqual({
        type: types.FETCH_REQUEST,
        name: 'foo',
      })
    })

    it('creates an action to finish a fetch with success', () => {
      const channel = { name: 'foo', bar: 'baz' }

      expect(actions.fetchSuccess('foo', channel)).toEqual({
        type: types.FETCH_SUCCESS,
        name: 'foo',
        entities: {
          channels: {
            foo: { name: 'foo', bar: 'baz' },
          },
        },
        result: 'foo',
      })
    })

    it('creates an action to finish a fetch with failure', () => {
      expect(actions.fetchFailure('foo', 'Network Error')).toEqual({
        type: types.FETCH_FAILURE,
        name: 'foo',
        message: 'Network Error',
      })
    })
  })

  describe('Fetch channels list', () => {
    it('creates an action to trigger', () => {
      expect(actions.fetchListTrigger('foo')).toEqual({
        type: types.FETCH_LIST_TRIGGER,
        url: 'foo',
      })
    })

    it('creates an action to start a fetch request', () => {
      expect(actions.fetchListRequest('foo')).toEqual({
        type: types.FETCH_LIST_REQUEST,
        strategy: 'foo',
      })
    })

    it('creates an action to finish a fetch with success', () => {
      const channels = {
        before: 'a',
        after: 'b',
        items: [{ name: 'foo', cover: 'bar' }],
      }

      expect(actions.fetchListSuccess(channels, 'foo')).toEqual({
        type: types.FETCH_LIST_SUCCESS,
        after: 'b',
        before: 'a',
        entities: {
          channels: {
            foo: { name: 'foo', cover: 'bar' },
          },
        },
        result: ['foo'],
        strategy: 'foo',
      })
    })

    it('creates an action to finish a fetch with failure', () => {
      expect(actions.fetchListFailure('Network Error')).toEqual({
        type: types.FETCH_LIST_FAILURE,
        message: 'Network Error',
      })
    })
  })

  describe('Fetch list tail', () => {
    it('creates an action to trigger a fetch request', () => {
      expect(actions.fetchListTailTrigger('foo')).toEqual({
        type: types.FETCH_LIST_TAIL_TRIGGER,
        url: 'foo',
      })
    })

    it('creates an action to start a fetch request', () => {
      expect(actions.fetchListTailRequest()).toEqual({
        type: types.FETCH_LIST_TAIL_REQUEST,
      })
    })

    it('creates an action to finish a fetch with success', () => {
      const channels = {
        before: 'a',
        after: 'b',
        items: [{ name: 'foo', cover: 'bar' }],
      }

      expect(actions.fetchListTailSuccess(channels)).toEqual({
        type: types.FETCH_LIST_TAIL_SUCCESS,
        after: 'b',
        before: 'a',
        entities: {
          channels: {
            foo: { name: 'foo', cover: 'bar' },
          },
        },
        result: ['foo'],
      })
    })

    it('creates an action to finish a fetch with failure', () => {
      expect(actions.fetchListTailFailure('Network Error')).toEqual({
        type: types.FETCH_LIST_TAIL_FAILURE,
        message: 'Network Error',
      })
    })
  })
})
