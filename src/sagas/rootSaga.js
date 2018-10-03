import { takeLatest, all } from 'redux-saga/effects';
import {
  receiveUser,
} from './user';

export default function* rootSaga() {
  yield all([
    takeLatest('RECEIVE_USER', receiveUser),
  ]);
}
