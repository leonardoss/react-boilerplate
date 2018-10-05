import { takeLatest, all, takeEvery } from 'redux-saga/effects';
import {
  authStatusChange,
  authWithFederations,
  authWithUsernameAndPassword,
} from './auth';


export default function* rootSaga() {
  yield all([
    // takeLatest('RECEIVE_USER', receiveUser),
    takeEvery('AUTH_STATUS_CHANGE', authStatusChange),
    takeLatest('AUTH_WITH_FEDERATIONS', authWithFederations),
    takeLatest('AUTH_WITH_USERNAME_AND_PASSWORD', authWithUsernameAndPassword),
  ]);
}
