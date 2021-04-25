import { all } from 'redux-saga/effects';

import { usersLoad, userAdd } from './usersSagas';

export default function* rootSaga() {
  yield all([
    usersLoad(),
    userAdd()
  ])
}
