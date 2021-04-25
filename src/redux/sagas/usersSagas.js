import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setUsers, setError, saveUser, setUserAddError } from '../actions/usersActions';
import { get, post } from '../api';

const API_URL = 'https://reqres.in/api/users';

export function* handleUsersLoad(payload) {
  try {
    const users = yield call(get, API_URL);
    yield put(setUsers(users))
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* usersLoad(action) {
  const payload = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, payload)
}

export function* handleAddUser(payload) {
  try {
    const userData = yield call(post, API_URL, payload);
    yield put(saveUser(userData));
  } catch (error) {
    yield put(setUserAddError(error.toString()));
  }
}

export function* userAdd(action) {
  const { payload } = yield take(USERS.ADD_USER);
  yield fork(handleAddUser, payload)
}
