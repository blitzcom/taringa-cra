import * as types from './types'

export const searchTrigger = q => ({
  type: types.SEARCH_TRIGGER,
  q: q,
})

export const searchStart = q => ({
  type: types.SEARCH_START,
  q: q,
})

export const searchFinish = () => ({
  type: types.SEARCH_FINISH,
})

export const searchUsersRequest = q => ({
  type: types.SEARCH_USERS_REQUEST,
  q: q,
})

export const searchUsersSuccess = payload => ({
  type: types.SEARCH_USERS_SUCCESS,
  payload: payload,
})

export const searchUsersFailure = message => ({
  type: types.SEARCH_USERS_FAILURE,
  message: message,
})

export const searchStoriesRequest = q => ({
  type: types.SEARCH_STORIES_REQUEST,
  q: q,
})

export const searchStoriesSuccess = payload => ({
  type: types.SEARCH_STORIES_SUCCESS,
  payload: payload,
})

export const searchStoriesFailure = message => ({
  type: types.SEARCH_STORIES_FAILURE,
  message: message,
})

export const searchChannelsRequest = q => ({
  type: types.SEARCH_CHANNELS_REQUEST,
  q: q,
})

export const searchChannelsSuccess = payload => ({
  type: types.SEARCH_CHANNELS_SUCCESS,
  payload: payload,
})

export const searchChannelsFailure = message => ({
  type: types.SEARCH_CHANNELS_FAILURE,
  message: message,
})

export const searchClear = () => ({
  type: types.SEARCH_CLEAR,
})
