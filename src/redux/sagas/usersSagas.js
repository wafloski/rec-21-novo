import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setUsers, setError, saveUser, setUserAddError } from '../actions/usersActions';
import { get, post } from '../api';

const API_URL = 'https://reqres.in/api/users';

export function* handleUsersLoad(query) {
  try {
    const users = yield call(get, API_URL, query);
    yield put(setUsers(users))
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* usersLoad() {
  const { query } = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, query)
}

export function* handleAddUser(payload) {
  try {
    const userData = yield call(post, API_URL, payload);
    yield put(saveUser(userData));
  } catch (error) {
    yield put(setUserAddError(error.toString()));
  }
}

export function* userAdd() {
  const { payload } = yield take(USERS.ADD_USER);
  yield fork(handleAddUser, payload)
}
