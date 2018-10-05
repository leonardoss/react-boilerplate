import { takeLatest, all } from 'redux-saga/effects';
import { loginUser } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest('LOGIN_USER', loginUser),
  ]);
}
