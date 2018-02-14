import { call, put } from 'redux-saga/effects'

export const fetchUser = username => {
  return axios.get(`/user/${username}/about`).then(response => response.data)
}

export function* loadUser(username) {
  try {
    yield put({ type: 'users/FETCH_REQUEST' })

    const user = yield call(fetchUser, username)

    yield put({ type: 'users/FETCH_SUCCESS' })
  } catch (e) {
    yield put({ type: 'users/FETCH_FAILURE' })
  }
}
